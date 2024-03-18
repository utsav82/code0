import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, "./frontend", "out")));

app.get("/api", (req, res) => {
  res.send("Hellow world");
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./frontend", "out", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server Running on port- ${PORT}`);
});
