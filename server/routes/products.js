var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Product = require('../models/Product.js');

/* GET ALL */
router.get('', function(req, res, next) {
  Product.find(function (err, items) {
    if (err) return next(err);
    res.json(items);
  });
});

/* GET SINGLE BY ID */
router.get('/:id', function(req, res, next) {
  Product.findById(req.params.id, function (err, item) {
    if (err) return next(err);
    res.json(item);
  });
});

/* SAVE */
router.post('', function(req, res, next) {
  Product.create(req.body, function (err, item) {
    if (err) return next(err);
    res.json(item);
  });
});

/* UPDATE */
router.put('/:id', function(req, res, next) {
  Product.findByIdAndUpdate(req.params.id, req.body, function (err, item) {
    if (err) return next(err);
    res.json(item);
  });
});

/* DELETE */
router.delete('/:id', function(req, res, next) {
  Product.findByIdAndRemove(req.params.id, req.body, function (err, item) {
    if (err) return next(err);
    res.json(item);
  });
});

module.exports = router;
