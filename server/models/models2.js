var bookshelf = require('../config/bookshelf');

var Institute = bookshelf.Model.extend({
    tableName: 'institutes'
});

module.exports = {
	Institute: Institute
}
