const db = require('../config/db');

class FilmDao {

    async create(movie) {
        let sql = `INSERT INTO film (cim, megjelenes, ertekeles, hossz)
                   VALUES ('${movie.cim}', '${movie.megjelenes}', '${movie.ertekeles}', '${movie.hossz}')`;

        return await db.query(sql);
    }

    async getFilmGenres(film_id) {
        let sql = `SELECT mufaj.nev FROM besorolas, mufaj
                   WHERE besorolas.film_id = ${film_id} and besorolas.mufaj_id = mufaj.id;`;

        let result = await db.query(sql);
        return result.splice(0).map(mufaj => mufaj.nev).join(', ');
    }

    async read() {
        let sql = `SELECT * FROM film`;
        const result = await db.query(sql);
        let filmek = result.splice(0);

        for (const film of filmek) {
            film['genres'] = await this.getFilmGenres(film.id);
        }

        return filmek;
    }

    async update(movie) {
        let sql = `UPDATE film
                   SET cim        = '${movie.cim}',
                       megjelenes = '${movie.megjelenes}',
                       ertekeles  = '${movie.ertekeles}',
                       hossz      = '${movie.hissz}'
                   WHERE id = ${id}`;
        await db.query(sql);
    }

    async delete(id) {
        let sql = `DELETE FROM film WHERE id = ${id}`;

        return await db.query(sql);
    }

}

module.exports = FilmDao;