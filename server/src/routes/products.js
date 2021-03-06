var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Product = require('../models/Product.js');

/* GET ALL */
router.get('', function(req, res, next) {
  Product.find(function (err, docs) {
    if (err) return next(err);
    res.json(docs);
  });
});

/* GET SINGLE BY ID */
router.get('/:id', function(req, res, next) {
  Product.findById(req.params.id, function (err, doc) {
    if (err) return next(err);
    res.json(doc);
  });
});

/* SAVE */
router.post('', function(req, res, next) {
  Product.create(req.body, function (err, doc) {
    if (err) return next(err);
    res.json(doc);
  });
});

/* UPDATE */
router.put('/:id', function(req, res, next) {
  Product.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, doc) {
    if (err) return next(err);
    res.json(doc);
  });
});

/* MARK DELETED */
router.delete('/:id', function(req, res, next) {
  Product.findByIdAndUpdate(req.params.id, { isDeleted: true }, { new: true }, function (err, doc) {
    if (err) return next(err);
    res.json(doc);
  });
});

/* REMOVE */
router.delete('/:id/rem', function(req, res, next) {
  Product.findByIdAndRemove(req.params.id, function (err, doc) {
    if (err) return next(err);
    res.json(doc);
  });
});

module.exports = router;
