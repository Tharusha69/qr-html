const express = require("express");
const app = express();
var http = require('http');

app.get("/", (req, res) => {
  res.sendFile(__dirname+"/qr.html");
})
app.listen(3000, () => {
  console.log(`Example app listening...`);
})
