var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
var passportLocalMongoose = require("passport-local-mongoose");

var principalSchema = new mongoose.Schema({
  name: String,
  type: String,
  username: String,
  password: String,
  hostel: String,
  image: String
});

principalSchema.plugin(passportLocalMongoose);
var Principal = (module.exports = mongoose.model("Principal", principalSchema));

module.exports.createPrincipal = function(newPrincipal, callback) {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newPrincipal.password, salt, function(err, hash) {
        newPrincipal.password = hash;
        newPrincipal.save(callback);
    });
  });
};

module.exports.getUserByUsername = function(username, callback) {
  var query = { username: username };
  Principal.findOne(query, callback);
};

module.exports.getUserById = function(id, callback) {
  Principal.findById(id, callback);
};

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, function(err, passwordFound) {
    if (err) throw err;
    callback(null, passwordFound);
  });
};
