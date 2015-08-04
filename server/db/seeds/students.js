'use strict';

exports.seed = function(knex, Promise) {
  /*  return Promise.join(
        // Deletes ALL existing entries
        knex('table_name').del(), 

        // Inserts seed entries
        knex('table_name').insert({id: 1, colName: 'rowValue'}),
        knex('table_name').insert({id: 2, colName: 'rowValue2'}),
        knex('table_name').insert({id: 3, colName: 'rowValue3'})
    );*/


  return knex('students').insert([{

    first_name: 'jack',
    last_name: 'Jones',
    email: 'jjones@test.net',
    phone_number: '(555) 222-3333',
    street_address: '1432 Another Street',
    city: 'Montgomery',
    state: 'Alabama',
    zip_code: '99291',
    created_at: new Date(),
    updated_at: new Date()
  }]);
};