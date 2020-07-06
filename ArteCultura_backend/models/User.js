const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userschema = new Schema({
  _id: mongoose.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', userschema);
