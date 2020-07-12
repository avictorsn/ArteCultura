const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  organizer: String,
  event_name: String,
  description: String,
  date: Date,
  local: String,
  time: String
});

module.exports = mongoose.model('Event', eventSchema);
