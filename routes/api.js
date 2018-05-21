var express = require('express');
var router = express.Router()

router.get('/goals', function(req, res, next){

	res.render('goals', { title: 'Fund Goals' })

	// res.json({
	// 	confirmation:'success',
	// 	message: 'success'
	// });

});

module.exports = router;
