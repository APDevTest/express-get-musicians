const express = require("express");
const app = express();

const musicianRouter = require("./routes/musician");

app.use(express.json());
app.use("/musician", musicianRouter); 
module.exports = app;