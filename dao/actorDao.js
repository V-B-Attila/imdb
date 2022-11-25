const db = require('../config/db');

class ActorDao {

    async create (actor) {
        let sql = `INSERT INTO szinesz (nev, kor)
                    VALUES ('${actor.nev}', ${actor.kor})`;
        return await db.query(sql);
    }

    async read () {
        let sql = `SELECT * FROM szinesz`
        const result = await db.query(sql);
        return result.splice(0);
    }

    async update (actor) {
        let sql = `UPDATE szinesz
                   SET nev = '${actor.nev}',
                       kor = ${actor.kor}
                   WHERE id = ${id}`;
        await db.query(sql);
    }

    async delete (id) {
        let sql = `DELETE FROM szinesz WHERE id = ${id}`
        return await db.query(sql);
    }

    async getById(id) {
        const sql = `SELECT * FROM szinesz WHERE id = ${id}`
        const result = await db.query(sql);
        return result.splice(0)[0];
    }

}

module.exports = ActorDao;