let express = require("express");
let app = express();
require("dotenv").config();

// app.get("/", function (req, res) {
// res.send("Hello Express");
// });
//
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// Normal usage
// app.use(express.static(__dirname + "/public"));
// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));

app.get("/json", function (req, res) {
  let msgStyle = process.env.MESSAGE_STYLE;

  let msg;

  if (msgStyle === "uppercase") {
    msg = "Hello json".toUpperCase();
  } else {
    msg = "Hello json";
  }

  res.json({ message: msg });
});

app.use(function middleware(req, res, next) {
  var string = req.method + " " + req.path + " - " + req.ip;
  console.log(string)
  // Do something
  // Call the next function in line:
  next();
});

module.exports = app;
