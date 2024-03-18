import express from "express";
import path from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import codeSnippetController from "./controllers/codeSnippetController.js";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, "./frontend", "out")));

app.get("/api/code-snippets", codeSnippetController.getAllCodeSnippets);
app.post("/api/code-snippets", codeSnippetController.createCodeSnippet);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./frontend", "out", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server Running on port- ${PORT}`);
});
