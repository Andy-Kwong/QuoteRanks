var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

mongoose.set("debug", true);

app.use(bodyParser.json());
app.use(express.static(__dirname + '/client/dist'));

require('./routes')(app);

app.all('*', (req, res, next) => {
    res.sendFile(path.resolve("./client/dist/index.html"));
});

const port = 8000;
const dbUrl = "mongodb://localhost/QuoteRankAngular";

mongoose.connect(dbUrl);

app.listen(port, function() {
    console.log(`Woohoo! On ${port}`);
})
