import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (_, res) => {
  res.send("Hello from Express backend!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
