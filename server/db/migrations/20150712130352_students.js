'use strict';

exports.up = function(knex, Promise) {

    return knex.schema.createTable('students', function(t) {
	t.increments().primary();
    t.string('first_name').notNull();
    t.string('middle_name').nullable();
    t.string('last_name').notNull();
    t.string('title').nullable();
    t.string('phone_number').nullable();
    t.string('email').nullable();
    t.string('street_address').nullable();
    t.string('city').nullable();
    t.string('state').nullable();
    t.string('pin_code').nullable();
  });
  
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('students’);
  
};
