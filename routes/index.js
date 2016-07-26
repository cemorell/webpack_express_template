var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Request API access: http://www.yelp.com/developers/getting_started/api_access
var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: '261Ny0SOxoKhNoQahCJj1w',
  consumer_secret: 'ZK-GXPw2vintNMMIlpzuBqLCl_s',
  token: 'ItMX1Z2d5FS5T9OTXmjCzaXlOEQE_Z8i',
  token_secret: 'yAyp2w2756XUiGc2HJXzLaAXgp4',
});

// See http://www.yelp.com/developers/documentation/v2/search_api
yelp.search({ term: 'date,dancing', location: '78741', limit: 3 })
.then(function (data) {
  console.log(data);
})
.catch(function (err) {
  console.error(err);
});

module.exports = router;
