// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
const MongoClient = require('mongodb').MongoClient


// configuration ===========================================

// config files
var port = process.env.PORT || 3000; // set our port
var db = require('./config/db');

// connect to our mongoDB database (commented out after you enter in your own credentials)
// connectionsubject = mongoose.createConnection(db.urlSubjectViews);

MongoClient.connect('mongodb://localhost:27017/',  { useNewUrlParser: true },(err, client) => {
  // ... start the server
  if (err) return;
  db = client.db('donorschoose')
  collection = db.collection('projects');

  })



// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port);
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app
