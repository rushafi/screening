var express = require('express');
var geocoder = require('geocoder');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Mukto Software' });
});

router.get('/location', function(req, res) {
  res.render('location', { title: 'Find Location' });
});


router.post('/findLocation', function(req, res) {
	
	var address=req.body.address;
	
	console.log(address);
	
	geocoder.geocode(address, function ( err, info ) {				
		console.log(info);
		res.send(JSON.stringify(info,null,4));
	});

});

module.exports = router;
