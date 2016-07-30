var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
    _id: {type: Schema.ObjectId, auto: true},
    name: {type: String, required: true},
    address: {type: String, required: true},
    contact: String
});

var users = mongoose.model("users", userSchema);

module.exports = users;