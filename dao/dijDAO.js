const db = require('../config/db');

// TODO: rename dij -> dijak

class DijDAO {

    async create (fee) {
        let sql = `INSERT INTO dijak (nev, leiras)
                    VALUES ('${nev}', '${leiras}')`
        return await db.query(sql);
    }

    async read() {
        let sql = `SELECT * FROM dijak`
        const result = await db.query(sql);
        return result.splice(0);
    }

    // TODO: fee (award) fee.nev fee.lerias
    async update(fee) {
        let sql = `UPDATE dijak
                   SET nev = '${nev}',
                       leiras = '${leiras}'
                   WHERE id = ${dijak.id}`;

        await db.query(sql);
    }

    async delete(id) {
        let sql = `DELETE FROM dijak WHERE id = ${dijak.id}`;
        await db.query(sql);
    }

}

module.exports = DijDAO;