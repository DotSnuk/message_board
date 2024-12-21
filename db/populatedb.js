#! /usr/bin/env node
require('dotenv').config();
const { Client } = require('pg');
const { argv } = require('node:process');

const SQL = `
CREATE TABLE IF NOT EXISTS messages 
(id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
message TEXT NOT NULL, username VARCHAR (255) NOT NULL, 
post_date DATE NOT NULL DEFAULT CURRENT_DATE);

INSERT INTO messages (message, username) VALUES
  ('hello', 'snuken');
`;

async function main() {
  console.log('seeding...');
  const passwd = process.env.DB_PASSWORD;
  const connectionString = process.env.DB_DEPLOYMENT_STRING
    ? process.env.DB_DEPLOYMENT_STRING
    : `postgresql://snuken:${passwd}>@localhost:5432/message_board`;
  const client = new Client({
    connectionString: connectionString,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

exports.module = { main };
