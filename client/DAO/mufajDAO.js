const db = require('../config/db');

class MufajDAO {

    async create (genre){
        const sql = `INSERT INTO mufaj (nev,)
                     VALUES ('${nev}')`;
        return await db.query(sql);
    }

    async read() {
        const sql = `SELECT * FROM mufaj`
        const result = await db.query(sql);
        return result.rows;
    }

    async update(gener) {
        const sql = `UPDATE mufaj
                     SET nev = '${nev}'
                     WHERE id = ${id}`;
        await db.query(sql);
    }

    async delete(id) {
        const sql = `DELETE FROM mufaj WHERE id = '${mufaj.id}'`
        return await db.query(sql);
    }

}

module.exports = MufajDAO;