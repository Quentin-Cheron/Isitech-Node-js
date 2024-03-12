import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world !");
});

app.post("/message", (req, res) => {
  res.send("Request body is missing !");
});

app.listen(8000, () => {
  console.log(`Server listening on port 8000`);
});
