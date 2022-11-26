const db = require('../config/db');

const GenreDao = require('./genreDao');
const genreDao = new GenreDao();

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
                       hossz      = '${movie.hossz}'
                   WHERE id = ${movie.id}`;
        await db.query(sql);
    }

    async delete(id) {
        let sql = `DELETE FROM film WHERE id = ${id}`;

        return await db.query(sql);
    }

    async getById(id) {
        const sql = `SELECT * FROM film WHERE id = ${id}`
        const result = await db.query(sql);
        return result.splice(0)[0];
    }

    async addGenresToFilm(film_id, genresList) {
        for (const genre of genresList) {
            const genre_id = (await genreDao.getIdByName(genre)).id;
            await this.createClassification(film_id, genre_id);
        }
    }

    async createClassification(film_id, mufaj_id) {
        let sql = `INSERT INTO besorolas (film_id, mufaj_id)
                   VALUES ('${film_id}', '${mufaj_id}')`;

        return await db.query(sql);
    }

    async getLatestFilm() {
        const sql = `SELECT id FROM film ORDER BY ID DESC`
        const result = await db.query(sql);
        return result.splice(0)[0];
    }
}

module.exports = FilmDao;