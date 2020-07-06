const mongoose = require('mongoose');

module.exports.mongoose = mongoose;

module.exports.connect = mongoose.connect('mongodb://localhost:27017/ArteCulturaDB', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => {
  console.log('MongoDB client connected!');
});
