var mongoose = require('mongoose');
//var shortid = require('shortid');

var CategorySchema = new mongoose.Schema({
  //_id: { type: String, default: shortid.generate },
  name: String,
  description: String,
  thumbnailImageUrl: String,
  meta: { type: { title: String, description: String }, default: { title: '', description: '' } },
  createdDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false }
});

module.exports = mongoose.model('Category', CategorySchema);
