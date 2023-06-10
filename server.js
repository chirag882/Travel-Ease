const express = require('express')
const app = express()
require('dotenv').config();
const connectDatabase = require("./config/dbConfig");
const port = process.env.PORT || 5000;

// connecting to database
connectDatabase();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})