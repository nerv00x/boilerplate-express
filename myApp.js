let express = require("express");
let app = express();

// app.get("/", function (req, res) {
//   res.send("Hello Express");
// });
const path =__dirname + "/views/index.html";
app.get("/", function (req, res) {
  res.sendFile(path);
});
