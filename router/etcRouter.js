const express = require('express');
const router = express.Router();

const EtcDao = require('../dao/etcDao');
const etcDao = new EtcDao();

// Read
router.get('/etc', async function(req, res){
    try{
        const query1 = await etcDao.query1();
        const query2 = await etcDao.query2();
        const query3 = await etcDao.query3();
        const scores = (await etcDao.getScores()).map(score => score.ertekeles);
        scores.sort().reverse();
        const scoreValues = scores.map(score => occurence(scores, score));
        res.render('etc', {query1, query2, query3, scores, scoreValues});
    } catch (err) {
        console.log('Something bad happend!');
        console.error(err);
        res.render('error', {error: err.message});
    }
});

function occurence(arr, element) {
    let result = 0;
    for (const arrElement of arr) {
        if (arrElement === element) {
            result++;
        }
    }
    return result;

}

module.exports = router;