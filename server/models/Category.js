var mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({
  name: String,
  description: String,
  thumbnailImageUrl: String,
  meta: { type: { title: String, description: String }, default: { title: '', description: '' } },
  createdDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false }
});

module.exports = mongoose.model('Category', CategorySchema);
