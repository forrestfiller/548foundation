var express = require('express');
var router = express.Router()

router.get('/projects', function(req, res, next){

	res.render('projects', { title: 'delete this' })

	// res.json({
	// 	confirmation:'success',
	// 	message: 'success'
	// });

});

module.exports = router;
