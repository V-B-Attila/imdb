const db = require('../config/db');

class FilmDao {

    async create (movie){
        let sql = `INSERT INTO film (cim, megjelenes, ertekeles, hossz)
                   VALUES ('${movie.cim}', '${movie.megjelenes}', '${movie.ertekeles}', '${movie.hossz}')`;

        return awaitdb.query(sql);
    }

    async read () {
        let sql = `SELECT * FROM film`;
        const result = await db.query(sql);
        return result.splice(0);
    }

    async update (movie) {
        let sql = `UPDATE film
                   SET cim        = '${movie.cim}',
                       megjelenes = '${movie.megjelenes}',
                       ertekeles  = '${movie.ertekeles}',
                       hossz      = '${movie.hissz}'
                   WHERE id = ${id}`;
        await db.query(sql);
    }

    async delete (id) {
        let sql = `DELETE FROM film WHERE id = ${id}`;

        return await db.query(sql);
    }

}

module.exports = FilmDao;