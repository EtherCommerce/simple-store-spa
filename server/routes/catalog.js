var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Product = require('../models/Product.js');

/* GET ALL */
router.get('/products', function(req, res, next) {
  Product.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE BY ID */
router.get('/products/:id', function(req, res, next) {
  Product.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE */
router.post('/products', function(req, res, next) {
  Product.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE */
router.put('/products/:id', function(req, res, next) {
  Product.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE */
router.delete('/products/:id', function(req, res, next) {
  Product.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
