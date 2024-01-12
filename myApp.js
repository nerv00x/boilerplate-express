let express = require("express");
let app = express();

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

app.get('/json', function (req, res) {
    let msgStyle = process.env.MESSAGE_STYLE;

    let msg

    if (msgStyle === "uppercase") {
        msg = "Hello json".toUpperCase();
    } else {
        msg = "Hello json";
    }

    res.json({ "message": msg });
});

module.exports = app;
