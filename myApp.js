let express = require("express");
let app = express();

app.get("/", function (req, res) {
  res.send("Hello Express");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});
