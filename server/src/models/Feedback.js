const mongoose = require('mongoose');
//const shortid = require('shortid');

const FeedbackSchema = new mongoose.Schema({
  //_id: { type: String, default: shortid.generate },
  author: { type: { name: String, email: String } },
  content: String,
  rate: Number,
  createdDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
