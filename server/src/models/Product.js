const mongoose = require('mongoose');
//const  shortid = require('shortid');

const ProductSchema = new mongoose.Schema({
  //_id: { type: String, unique: true, default: shortid.generate },
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
  isDeleted: { type: Boolean, default: false }
});

module.exports = mongoose.model('Product', ProductSchema);
