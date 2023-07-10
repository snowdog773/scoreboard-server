const express = require("express");

const cors = require("cors");

const app = express();

app.use(express.json());
//.json() needed for POST requests
app.use(cors());

app.use("/getScores", require("./routes/getData"));
app.use("/addNewScore", require("./routes/addNewScore"));

app.listen(process.env.PORT || 6001, () => {
  console.log("server running");
});
