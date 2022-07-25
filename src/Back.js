const express = require("express");

const app = express();
const bodyParser = require("body-parser");

var nameT = [];
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (res, req) {});

app.post("/", function (res, req) {
  var inpu = req.body.name;
  nameT.push(inpu);
});

app.listen(3000, function () {
  console.log("running");
});
