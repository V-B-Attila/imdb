const db = require('../config/db');

//TODO: replace result.rows -> result.splice(0);

class MufajDAO {

    async create (genre){
        const sql = `INSERT INTO mufaj (nev,)
                     VALUES ('${nev}')`;
        return await db.query(sql);
    }

    async read() {
        const sql = `SELECT * FROM mufaj`
        const result = await db.query(sql);
        return result.splice(0);
    }

    async update(gener) {
        const sql = `UPDATE mufaj
                     SET nev = '${nev}'
                     WHERE id = ${id}`;
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

module.exports = MufajDAO;