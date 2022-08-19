import express from "express";
import { getIndexFile } from "./indexFile";

const PORT = process.env.PORT || 3006;
const app = express();

app.get("/", (req, res) => {
  const html = getIndexFile();
  res.send(html);
});

app.use(express.static("./build"));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
