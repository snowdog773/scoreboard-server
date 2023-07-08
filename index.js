const express = require("express");

const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/get", require("./routes/getData"));

app.listen(process.env.PORT || 6001, () => {
  console.log("server running");
});
