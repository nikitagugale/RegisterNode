const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,

  },
  password: {
    type: String,
    required: true,
  },
  role: {
      type: String,
      required: true,
  }
});

UserSchema.plugin(uniqueValidator);
const user = mongoose.model("user", UserSchema);
module.exports = user;