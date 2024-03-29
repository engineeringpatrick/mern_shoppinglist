const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({path: "./config.env"});
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

const dbo= require("./db/conn"); // gets driver conn

// second parameters is callback function
app.listen(port, () => {
    dbo.connectToServer((err) => {
        if (err) console.error(err);
    });
    console.log(`Server is running on port: ${port}`)
})