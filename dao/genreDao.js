const db = require('../config/db');

//TODO: replace result.rows -> result.splice(0);

class GenreDao {

    async create (genre){
        const sql = `INSERT INTO mufaj (nev)
                     VALUES ('${genre.nev}')`;
        return await db.query(sql);
    }

    async read() {
        const sql = `SELECT * FROM mufaj`
        const result = await db.query(sql);
        return result.splice(0);
    }

    async update(genre) {
        const sql = `UPDATE mufaj
                     SET nev = '${genre.nev}'
                     WHERE id = ${genre.id}`;
        await db.query(sql);
    }

    async delete(id) {
        const sql = `DELETE FROM mufaj WHERE id = '${id}'`
        return await db.query(sql);
    }

    async getById(id) {
        const sql = `SELECT * FROM mufaj WHERE id = ${id}`
        const result = await db.query(sql);
        return result.splice(0)[0];
    }
}

module.exports = GenreDao;