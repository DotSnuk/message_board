const { Pool } = require('pg');

module.exports = new Pool({
  host: 'localhost',
  user: 'snuken',
  database: 'message_board',
  password: process.env.DB_PASSWORD,
  port: 5432,
});
