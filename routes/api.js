var express = require('express');
var router = express.Router()

router.get('/', function(req, res, next){

	res.json({
		confirmation:'success',
		message: 'success'
	});

});

module.exports = router;
