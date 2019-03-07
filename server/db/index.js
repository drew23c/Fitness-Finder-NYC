const pg = require('pg-promise')({});
const connectionString = process.env.DATABASE_URL;
const db = pg(connectionString)
module.exports = db;