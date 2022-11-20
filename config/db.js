const { createPool } = require('mariadb');

const pool = createPool({
    host:"localhost",
    user: "root",
    password: "",
    database: "imdb",
    connectionLimit: 10
})

module.exports = pool;