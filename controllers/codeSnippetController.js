import db from "../database.js";

const codeSnippetController = {
  createCodeSnippet: async (req, res) => {
    const { username, language, source_code, stdin } = req.body;
    const output = "processing";
    try {
      const result = await db.query(
        "INSERT INTO code_snippets (username, language, source_code, stdin, output) VALUES (?, ?, ?, ?,?)",
        [username, language, source_code, stdin, output]
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
        "SELECT id, username, language, LEFT(source_code, 100) AS source_code, stdin, output, timestamp FROM code_snippets ORDER BY timestamp DESC LIMIT ?, ?",
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
};

export default codeSnippetController;
