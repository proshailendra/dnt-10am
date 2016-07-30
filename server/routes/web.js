var express = require("express");
var router = express.Router();
var path = require("path");

//sending spa layout file
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../../app/index.html"));
});

module.exports = router;