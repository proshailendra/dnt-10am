var express = require("express");
var bodyParser = require("body-parser"); //request parsing
var path = require("path");

var apiRoutes = require("./server/routes/api.js");
var webRoutes = require("./server/routes/web.js");

var app = express();

app.use(bodyParser.json()); //parsing request body data into json
app.use(bodyParser.urlencoded({ extended: false })); //parsing request url data

//setting path for static files like public css,js
app.use(express.static(path.join(__dirname, './libs')));
app.use(express.static(path.join(__dirname, './app')));

//registering app routes
app.use("/", webRoutes);
app.use("/api", apiRoutes);

//running server
var port = process.env.port || 1300;
app.listen(port);
console.log("Server is running at http://localhost:" + port);