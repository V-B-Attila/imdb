const db = require("../config/db");

class AwardsListDao {
    async read() {
        let sql = `SELECT * FROM rendelkezik`;
        const result = await db.query(sql);
        return result.splice(0);
    }

    async readWithNames() {
        let sql = `SELECT film.cim as film, szinesz.nev as actor, dijak.nev as award, datum as given_date
                   FROM rendelkezik
                            LEFT JOIN film film on film.id = rendelkezik.film_id
                            LEFT JOIN szinesz szinesz on szinesz.id = rendelkezik.szinesz_id
                            LEFT JOIN dijak dijak on rendelkezik.dij_id = dijak.id`;
        const result = await db.query(sql);
        console.log(result)
        return result.splice(0);
    }
}

module.exports = AwardsListDao;