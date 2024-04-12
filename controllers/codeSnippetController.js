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

async function getOutput(token) {
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
      throw "Token Required";
    }

    const response = await axios.request(options);
    let output;
    if (response.status.id <= 2) {
      output = "processing";
    } else if (response.data.status.id === 3) {
      output = Buffer.from(response.data.stdout, "base64").toString("utf-8");
    } else {
      output = response.data.status.description;
    }

    return output;
  } catch (error) {
    console.error("Error getting code snippets:", error);
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
        "INSERT INTO code_snippets (username, language, source_code, stdin, token, output) VALUES (?, ?, ?, ?, ?, ?)",
        [username, language, source_code, stdin, token, "processing"]
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
    const { page = 1, pageSize = 10, username } = req.query;
    const offset = (page - 1) * pageSize;

    try {
      
      const hasUsernameFilter =
        username !== null &&
        username !== undefined &&
        username !== "" &&
        username !== "undefined";

      let mainQuery =
        "SELECT id, username, language, timestamp FROM code_snippets";
      const mainQueryParams = [];

      if (hasUsernameFilter) {
        mainQuery += " WHERE username = ?";
        mainQueryParams.push(username);
      }

      mainQuery += " ORDER BY timestamp DESC LIMIT ?, ?";
      mainQueryParams.push(offset, parseInt(pageSize));

      const [codeSnippets] = await db.query(mainQuery, mainQueryParams);

      let totalCountQuery = "SELECT COUNT(*) AS totalCount FROM code_snippets";
      const totalCountQueryParams = [];

      if (hasUsernameFilter) {
        totalCountQuery += " WHERE username = ?";
        totalCountQueryParams.push(username);
      }

      const [totalCount] = await db.query(
        totalCountQuery,
        totalCountQueryParams
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
  getCodeSnippetById: async (req, res) => {
    const id = req.params.id;
    try {
      let code = await db.query(
        "SELECT id, username, language, source_code, stdin, token, timestamp, output FROM code_snippets WHERE id = ?",
        [id]
      );

      code = code[0][0];
      // console.log(code);

      if (!code.output || code.output === "processing") {
        code.output = await getOutput(code.token);
      }

      if (code.output !== "processing") {
        await client.set(id, JSON.stringify(code));
      }

      res.json(code);
    } catch (error) {
      console.error("Error getting code snippets:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default codeSnippetController;
