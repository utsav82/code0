import db from "../database.js";
import { Buffer } from "buffer";
import axios from "axios";
import { client } from "../redis.js";
const languageMap = new Map([
  ["c++", 54],
  ["java", 62],
  ["javascript", 63],
  ["python", 71],
]);

async function submitCodeSnippetToJudge0(codeSnippet) {
  try {
    const sourceCodeBase64 = Buffer.from(codeSnippet.source_code).toString(
      "base64"
    );
    const stdinBase64 = Buffer.from(codeSnippet.stdin).toString("base64");

    const options = {
      method: "POST",
      url: "https://judge0-ce.p.rapidapi.com/submissions",
      params: {
        base64_encoded: "true",
        fields: "*",
      },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
      },
      data: {
        language_id: languageMap.get(codeSnippet.language),
        source_code: sourceCodeBase64,
        stdin: stdinBase64,
      },
    };

    const response = await axios.request(options);

    return response.data.token;
  } catch (error) {
    console.error("Error submitting code snippet to Judge0:", error);
    throw error;
  }
}

const codeSnippetController = {
  createCodeSnippet: async (req, res) => {
    const { username, language, source_code, stdin } = req.body;
    try {
      const token = await submitCodeSnippetToJudge0({
        language,
        source_code,
        stdin,
      });

      const result = await db.query(
        "INSERT INTO code_snippets (username, language, source_code, stdin, token) VALUES (?, ?, ?, ?, ?)",
        [username, language, source_code, stdin, token]
      );

      const newCodeSnippetId = result.insertId;
      res.status(201).json({
        message: "Code snippet created successfully",
        id: newCodeSnippetId,
      });
    } catch (error) {
      console.error("Error creating code snippet:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  getAllCodeSnippets: async (req, res) => {
    const { page = 1, pageSize = 10 } = req.query;
    const offset = (page - 1) * pageSize;

    try {
      const [codeSnippets] = await db.query(
        "SELECT id, username, language, source_code, stdin, token, timestamp FROM code_snippets ORDER BY timestamp DESC LIMIT ?, ?",
        [offset, parseInt(pageSize)]
      );
      const [totalCount] = await db.query(
        "SELECT COUNT(*) AS totalCount FROM code_snippets"
      );
      const totalItems = totalCount[0].totalCount;
      const totalPages = Math.ceil(totalItems / pageSize);

      res.json({
        snippets: codeSnippets,
        currentPage: parseInt(page),
        totalPages: totalPages,
      });
    } catch (error) {
      console.error("Error getting code snippets:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  getOutput: async (req, res) => {
    const { token } = req.params;

    try {
      const options = {
        method: "GET",
        url: `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
        params: {
          base64_encoded: "true",
          fields: "*",
        },
        headers: {
          "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
          "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
        },
      };

      if (token === undefined) {
        res.status(400).json({ message: "Token is required" });
      }

      const response = await axios.request(options);
      let output;
      if (response.data.status.id === 3) {
        output = Buffer.from(response.data.stdout, "base64").toString("utf-8");
      } else {
        output = response.data.status.description;
      }

      if (response.data.status.id >= 3) {
        await client.set(token, output);
      }

      res.json({ output });
    } catch (error) {
      console.error("Error getting code snippets:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default codeSnippetController;
