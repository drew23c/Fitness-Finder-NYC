const pg = require('pg-promise')({});
const dbString = 'postgres://localhost/fitness';
const db = pg(dbString)
module.exports = db;