const { Pool } = require('pg');
const connection = process.env.DB_DEPLOYMENT_STRING
  ? process.env.DB_DEPLOYMENT_STRING
  : {
      host: 'localhost',
      user: 'snuken',
      database: 'message_board',
      password: process.env.DB_PASSWORD,
      port: 5432,
    };

module.exports = new Pool(connection);
