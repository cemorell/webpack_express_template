var express = require('express');
var router = express.Router();
var Yelp = require('yelp');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




router.get('/yelp/', function(req, res, next) {
  // Request API access: http://www.yelp.com/developers/getting_started/api_access
  console.log('hello', req.query)
  var yelp = new Yelp({
    consumer_key: '261Ny0SOxoKhNoQahCJj1w',
    consumer_secret: 'ZK-GXPw2vintNMMIlpzuBqLCl_s',
    token: 'ItMX1Z2d5FS5T9OTXmjCzaXlOEQE_Z8i',
    token_secret: 'yAyp2w2756XUiGc2HJXzLaAXgp4',
  });

  // See http://www.yelp.com/developers/documentation/v2/search_api
  yelp.search({ term: req.query.theme, location: req.query.city, limit: 5 })
  .then(function (data) {
    res.json(data);
  })
  .catch(function (err) {
    console.error(err);
  });
});

module.exports = router;
