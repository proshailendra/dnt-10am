var mongoose = require('mongoose');
var con = process.env.MONGODB_URI;

var connection = mongoose.connect(con);

module.exports = connection;