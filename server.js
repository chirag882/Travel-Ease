const express = require('express')
const app = express()
require('dotenv').config();
const connectDatabase = require("./config/dbConfig");
const port = process.env.PORT || 5000;
app.use(express.json());
// connecting to database
connectDatabase();

const userRoute = require("./routes/userRoute");

app.use("/api/users",userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})