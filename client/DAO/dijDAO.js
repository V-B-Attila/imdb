const db = require('../config/db');

class DijDAO {

    async create (fee) {
        let sql = `INSERT INTO dij (nev, leiras)
                    VALUES ('${nev}', '${leiras}')`
        return await db.query(sql);
    }

    async read() {
        let sql = `SELECT * dij`
        const result = await db.query(sql);
        return result.rows;
    }

    async update(fee) {
        let sql = `UPDATE dij
                   SET nev = '${nev}',
                       leiras = '${leiras}'
                   WHERE id = ${dij.id}`;

        await db.query(sql);
    }

    async delete(id) {
        let sql = `DELETE FROM dij WHERE id = ${dij.id}`;
        await db.query(sql);
    }

}

module.exports = DijDAO;