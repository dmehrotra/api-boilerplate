var promise = require('bluebird');
require('dotenv').load();

var options = {
	promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = "DATABASEURL";
var db = pgp(connectionString);


function getLocation(req,res,next){
	aws_id = req.params.aws_id
	db.any('select * from location').then(function (data) {
		res.status(200).json({
		      status: 'success',
		      data: data
		});
	 }).catch(function (err) {
		 return next(err);
	});	
}



module.exports = {
	getLocation: getLocation
};

	 





