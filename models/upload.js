var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
  src: {
    date: Buffer,
    contentType: String,
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
export const Image = mongoose.model('Image', Schema) || mongoose.model('Image');
