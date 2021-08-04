require('dotenv').config()
const express = require('express');

const app = express()
const dotenv = require ("dotenv")
dotenv.config();
const db = require ("./config/db")
const port = 1000

const {json} = require("body-parser");
const demo = require("./routes/userRoutes")

// using ngrok
const ngrok = require('ngrok');
(async function() {
  const url = await ngrok.connect(port);
  console.log(url)
})();

app.get("/", (req, res) => {
  res.json("welcome to my api")
});

app.use(express.json())

app.get('/', (req, res) => {
    res.send ("Welcome to my api")
  })
//database
db()
//   middleware
  app.use("/api/user", demo)

app.listen(port, () => {
  console.log(`runing server`)
})