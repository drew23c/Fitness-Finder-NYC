const pg = require('pg-promise')({});
const connectionString = 'postgres://localhost/fitness';
const db = pg(connectionString)
module.exports = db;