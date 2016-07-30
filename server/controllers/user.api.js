var express = require("express");
var router = express.Router();

var users = require("../models/user.js");

router.get("/", function (req, res) {
    users.find({}, function (err, data) {
        if (err)
            return;
        return res.send(data);
    });
});

router.post("/", function (req, res) {
    var body=req.body;
    var obj= new users(body);
    obj.save(function (err) {
        if (err)
            return;
        return res.send("created");
    });
});

router.get("/:id", function (req, res) {
    var id= req.params.id;
    users.find({_id:id}, function (err, data) {
        if (err)
            return;
        return res.send(data[0]);
    });
});

router.put("/:id", function (req, res) {
    var body=req.body;
    var obj= new users(body);
    users.findByIdAndUpdate(obj._id,{name:obj.name,address:obj.address,contact:obj.contact},function (err) {
        if (err)
            return;
        return res.send('updated');
    });
});

router.delete("/:id", function (req, res) {
    var id= req.params.id;
    users.findByIdAndRemove(id, function (err) {
        if (err)
            return;
        return res.send('deleted');
    });
});
module.exports= router;