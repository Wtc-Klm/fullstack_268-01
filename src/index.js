require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 7000;

app.get("/", (req, res) => {
  res.send("hello test world!");
});

app.listen(port, () => {
  console.log(`Exaple app lisening at http://localhost:${port}`);
});
