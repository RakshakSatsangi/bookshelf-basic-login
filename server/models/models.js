var bookshelf = require('../config/bookshelf');

var Forms = bookshelf.Model.extend({
    tableName: 'forms'
});


module.exports = {
	Forms: Forms
}


