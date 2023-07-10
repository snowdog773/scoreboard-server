const express = require("express");
const app = express.Router();
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv").config();
const uri = process.env.DB_CONNECTION_URI;

app.post("/", async (req, res) => {
  const database = "hangman";
  const collection = "hi-scores";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    // database and collection code goes here
    const db = client.db(database);
    const coll = db.collection(collection);
    const result = await coll.insertOne({
      name: req.body.name,
      score: req.body.score,
    });
    res.send(result);
  } catch (err) {
    res.send("Server error, your connection sucks!");

    console.log(err);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
});

module.exports = app;
