import db from "../database.js";

const codeSnippetController = {
  createCodeSnippet: async (req, res) => {
    const { username, language, source_code, stdin } = req.body;
    try {
      const result = await db.query(
        "INSERT INTO code_snippets (username, language, source_code, stdin) VALUES (?, ?, ?, ?)",
        [username, language, source_code, stdin]
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
    try {
      const [codeSnippets] = await db.query("SELECT * FROM code_snippets");
      res.json(codeSnippets);
    } catch (error) {
      console.error("Error getting code snippets:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default codeSnippetController;
