const express = require('express');
const router = express.Router();

const FilmDao = require('../dao/filmDAO');
const filmDao = new FilmDao();

const AwardDao = require('../dao/dijDAO');
const awardDao = new AwardDao();

router.get('/', async function (req, res) {
    const films = await filmDao.read();

    res.render('index', {films});
})

router.get('/awards', async function (req, res) {
    try {
        const awards = await awardDao.read();
        res.render('awards', {awards});
    } catch (err) {
        console.log('Valami hiba tortént!');
        console.error(err);
        res.render('error', {error: err.message});
    }
});

router.get('/genres', async function (req, res) {
    const awards = await awardDao.read();
    res.render('awards', {awards});
});

// TODO: Genre and Actors READ implementation
// + 1. ejs page (genres, actors)
// + 2. GET+Render (res.render)


module.exports = router;