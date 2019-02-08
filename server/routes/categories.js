var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Category = require('../models/Category.js');

/* GET ALL */
router.get('', function(req, res, next) {
  Category.find(function (err, items) {
    if (err) return next(err);
    res.json(items);
  });
});

/* GET SINGLE BY ID */
router.get('/:id', function(req, res, next) {
  Category.findById(req.params.id, function (err, item) {
    if (err) return next(err);
    res.json(item);
  });
});

/* SAVE */
router.post('', function(req, res, next) {
  Category.create(req.body, function (err, item) {
    if (err) return next(err);
    res.json(item);
  });
});

/* UPDATE */
router.put('/:id', function(req, res, next) {
  Category.findByIdAndUpdate(req.params.id, req.body, function (err, item) {
    if (err) return next(err);
    res.json(item);
  });
});

/* DELETE */
router.delete('/:id', function(req, res, next) {
  Category.findByIdAndRemove(req.params.id, req.body, function (err, item) {
    if (err) return next(err);
    res.json(item);
  });
});

module.exports = router;
