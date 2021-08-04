const express = require('express');
const app = express()
const dotenv = require ("dotenv")
dotenv.config();
const db = require ("./config/db")
const port = 1000

const {json} = require("body-parser");
const demo = require("./routes/userRoutes")

app.use(express.json())

app.get('/', (req, res) => {
    res.send ("Welcome to my api")
  })
//database
db()
//   middleware
  app.use("/api/user", demo)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})