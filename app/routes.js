var Subjects = require('./models/SubjectViews');
var CircularJSON = require('circular-json');

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
	// sample api route
 app.get('/api/data', function(req, res) {
  // use mongoose to get all nerds in the database
  collection.find({},{'_id': 0, 'school_state': 1, 'resource_type': 1, 'poverty_level': 1, 'date_posted': 1, 'total_donations': 1, 'funding_status': 1, 'grade_level': 1}).limit(10000).toArray(function(err, subjectDetails) {
   // if there is an error retrieving, send the error.
       // nothing after res.send(err) will execute
   if (err)
   res.send(err);
   let json = CircularJSON.stringify(subjectDetails);
    res.send(json); // return all nerds in JSON format
  });
 });





 // frontend routes =========================================================
 app.get('*', function(req, res) {
  res.sendfile('./public/login.html');
 });
}
