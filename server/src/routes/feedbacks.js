var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Feedback = require('../models/Feedback.js');

/* GET ALL */
router.get('', function(req, res, next) {
  Feedback.find(function (err, docs) {
    if (err) return next(err);
    res.json(docs);
  });
});

/* GET SINGLE BY ID */
router.get('/:id', function(req, res, next) {
  Feedback.findById(req.params.id, function (err, doc) {
    if (err) return next(err);
    res.json(doc);
  });
});

/* SAVE */
router.post('', function(req, res, next) {
  Feedback.create(req.body, function (err, doc) {
    if (err) return next(err);
    res.json(doc);
  });
});

/* UPDATE */
router.put('/:id', function(req, res, next) {
  Feedback.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, doc) {
    if (err) return next(err);
    res.json(doc);
  });
});

/* REMOVE */
router.delete('/:id/rem', function(req, res, next) {
  Feedback.findByIdAndRemove(req.params.id, function (err, doc) {
    if (err) return next(err);
    res.json(doc);
  });
});

module.exports = router;
