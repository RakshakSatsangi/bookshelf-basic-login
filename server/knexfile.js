// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
  connection: {
    host     : 'localhost',
    user     : 'root',
    password : 'rak123',
    database : 'logindemo',
   // charset  : 'utf8'
    //port     : 3300
    },

  migrations: {
    directory: './db/migrations',
    tableName: 'students',
    tableName: 'institutes'
  },

  seeds: {

    directory: './db/seeds'

  }   

  }//,

 /* staging: {
    client: 'mysql',
    connection: {
     
    host     : 'localhost',
    user     : 'root',
    password : 'raazkumar',
    database : 'logindemo',
    //charset  : 'utf8'
    port     : 3300
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'students',
      tableName: 'institutes'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      
    host     : 'localhost',
    user     : 'root',
    password : 'raazkumar',
    database : 'logindemo',
    //charset  : 'utf8'
    port     : 3300
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'students',
      tableName: 'institutes'

    }
  }
*/
};
