var bookshelf = require('../config/bookshelf');

var Student = bookshelf.Model.extend({
    tableName: 'students'
});


module.exports ={
	Student: Student
}
