var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
  src: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});
