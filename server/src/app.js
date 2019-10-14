const createError = require('http-errors');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors')

const apiCategoriesRouter = require('./routes/categories');
const apiProductsRouter = require('./routes/products');
const apiFeedbacksRouter = require('./routes/feedbacks');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ether-store', { promiseLibrary: require('bluebird'), useNewUrlParser: true })
  .then(() => console.log('connection successful'))
  .catch((err) => console.error(err));

const app = express();

app.use(cors({
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/categories', apiCategoriesRouter);
app.use('/api/v1/products', apiProductsRouter);
app.use('/api/v1/feedbacks', apiFeedbacksRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.sendStatus(err.status);
});

module.exports = app;
