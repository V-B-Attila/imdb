const db = require('../config/db');

// TODO: rename dij -> dijak

class AwardDao {

    async create (award) {
        let sql = `INSERT INTO dijak (nev, leiras)
                    VALUES ('${award.nev}', '${award.leiras}')`
        return await db.query(sql);
    }

    async read() {
        let sql = `SELECT * FROM dijak`
        const result = await db.query(sql);
        return result.splice(0);
    }

    // TODO: fee (award) fee.nev fee.lerias
    async update(award) {
        let sql = `UPDATE dijak
                   SET nev = '${award.nev}',
                       leiras = '${award.leiras}'
                   WHERE id = ${id}`;

        await db.query(sql);
    }

    async delete(id) {
        let sql = `DELETE FROM dijak WHERE id = ${id}`;
        await db.query(sql);
    }

    async getById(id) {
        const sql = `SELECT * FROM dijak WHERE id = ${id}`
        const result = await db.query(sql);
        return result.splice(0)[0];
    }

}

module.exports = AwardDao;