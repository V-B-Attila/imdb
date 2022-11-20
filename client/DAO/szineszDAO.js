const db = require('../config/db');

class SzineszDAO {

    async create (author) {
        let sql = `INSERT INTO szinesz (nev, kor)
                    VALUES ('${nev}', ${kor})`;
        return await db.query(sql);
    }

    async read () {
        let sql = `SELECT * FROM szinesz`
        const result = await db.query(sql);
        return result.rows;
    }

    async update (author) {
        let sql = `UPDATE szinesz
                   SET nev = '${szinesz.nev}',
                       kor = ${szinesz.kor}
                   WHERE id = ${szinesz.id}`;
        await db.query(sql);
    }

    async delete (id) {
        let sql = `DELETE FROM szinesz WHERE id = ${szinesz.id}`
        return await db.query(sql);
    }

}

module.exports = SzineszDAO;