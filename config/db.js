const { createPool } = require('mariadb');

const pool = createPool({
    host:"localhost",
    user: "root",
    password: "",
    database: "imdb",
})

module.exports = pool;