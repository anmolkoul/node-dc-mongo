var mongoose = require('mongoose');
var db = require('../../config/db');

// connect to our mongoDB database (commented out after you enter in your own credentials)
var connectionsubject = mongoose.createConnection(db.urlSubjectViews);

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = connectionsubject.model('', {}, 'projects');
