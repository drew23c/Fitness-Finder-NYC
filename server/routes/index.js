var express = require('express');
var router = express.Router();
const db = require('../db/queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/locations', db.allFitnessLocations);
router.get('/reviews', db.getAllReviews);
router.get('/reviews/:id', db.getReview);
router.get('/locations/:id', db.selectFitnessLocation);

module.exports = router;
