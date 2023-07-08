const express = require("express");
const app = express.Router();

app.get("/", async (req, res) => {
  console.log("get route ran");
});
module.exports = app;
