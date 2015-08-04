var bookshelf = require('../config/bookshelf');

var Centres = bookshelf.Model.extend({
    tableName: 'centres'
});

module.exports = {
	Centres: Centres
}
