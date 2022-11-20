const db = require('../config/db');

class FilmDAO{

    async create (movie){
        let sql = `INSERT INTO film (cim, megjelenes, ertekeles, hossz)
                   VALUES ('${cim}', '${megjelenes}', '${ertekeles}', '${hossz}')`;

        return awaitdb.query(sql);
    }

    async read () {
        let sql = `SELECT * FROM film`;
        const result = await db.query(sql);
        return result.splice(0);
    }

    async update (movie) {
        let sql = `UPDATE film
                   SET cim        = '${film.cim}',
                       megjelenes = '${film.megjelenes}',
                       ertekeles  = '${film.ertekeles}',
                       hossz      = '${film.hissz}'
                   WHERE id = ${film.id}`;
        await db.query(sql);
    }

    async delete (id) {
        let sql = `DELETE FROM film WHERE id = ${film.id}`;

        return await db.query(sql);
    }

}

module.exports = FilmDAO;