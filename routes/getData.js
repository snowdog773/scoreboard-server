const express = require("express");
const app = express.Router();
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv").config();
const uri = process.env.DB_CONNECTION_URI;

app.get("/", async (req, res) => {
  const database = "hangman";
  const collection = "hi-scores";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    // database and collection code goes here
    const db = client.db(database);
    const coll = db.collection(collection);
    const cursor = await coll.find().sort({ score: -1 }).toArray();

    res.send(cursor);
  } catch (err) {
    res.send({ status: 0 });

    console.log(err);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
});

module.exports = app;
