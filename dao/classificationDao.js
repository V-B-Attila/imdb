const db = require("../config/db");

class ClassificationDao {
    async create(film_id, mufaj_id) {
        let sql = `INSERT INTO besorolas (film_id, mufaj_id)
                   VALUES ('${film_id}', '${mufaj_id}')`;

        return await db.query(sql);
    }
}

module.exports = ClassificationDao;