const db = require("../config/db");

class EtcDao {
    async query1() {
        let sql = `SELECT film.cim, COUNT(film.cim) as awards FROM film, rendelkezik
                   WHERE film.id = rendelkezik.film_id and
                        YEAR(rendelkezik.datum) BETWEEN 2020 AND 2022
                   GROUP BY film.cim;`;

        let result = await db.query(sql);
        return result.splice(0);
    }

    async query2() {
        let sql = `SELECT AVG(film.ertekeles) as average, dijak.nev as award
                   FROM rendelkezik
                            INNER JOIN film film on film.id = rendelkezik.film_id
                            LEFT JOIN szinesz szinesz on szinesz.id = rendelkezik.szinesz_id
                            LEFT JOIN dijak dijak on rendelkezik.dij_id = dijak.id
                   GROUP BY dijak.nev`;

        let result = await db.query(sql);
        return result.splice(0);
    }

    async query3() {
        let sql = `SELECT cim, ertekeles FROM film
                   WHERE ertekeles IN (
                       SELECT max(ertekeles) FROM film
                   )
        `;

        let result = await db.query(sql);
        return result.splice(0);
    }

    async getScores() {
        let sql = `SELECT ertekeles FROM film`;
        let result = await db.query(sql);
        return result.splice(0);
    }
}

module.exports = EtcDao;