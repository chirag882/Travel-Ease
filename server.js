const express = require('express')
const app = express()
require('dotenv').config();
const connectDatabase = require("./config/dbConfig");
const port = process.env.PORT || 5000;
const cors = require('cors');

// connecting to database
connectDatabase();

// middleware
app.use(cors());
app.use(express.json());

const userRoute = require("./routes/userRoute");
const busesRoute = require("./routes/busesRoute");

app.use("/api/users",userRoute);
app.use("/api/buses",busesRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})