var mongoose = require('mongoose');
var shortid = require('shortid');

var ProductSchema = new mongoose.Schema({
  _id: { type: String, default: shortid.generate },
  sku: String,
  title: String,
  description: String,
  categoryId: Number,
  cost: Number,
  price: Number,
  stockQuantity: Number,
  thumbnailImageUrl: String,
  imageUrls: [{ type: String }],
  createdDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
  isDeleted: Boolean
});

module.exports = mongoose.model('Product', ProductSchema);
