const express = require('express');
const router = express.Router();

const FilmDao = require('../dao/filmDAO');
const filmDao = new FilmDao();

const AwardDao = require('../dao/dijDAO');
const awardDao = new AwardDao();

const GenreDao = require('../dao/mufajDAO');
const genreDao = new GenreDao();

const ActorsDao = require('../dao/szineszDAO');
const actorsDao = new ActorsDao();

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

router.get('/genres', async function(req, res){
    try{
        const genres = await genreDao.read();
        res.render('genres', {genres});
    } catch (err) {
        console.log('Valami hiba történt!');
        console.error(err);
        res.render('error', {error: err.message});
    }
});

router.get('/genres-update/:id', async function(req, res){
    try{
        const id = req.params.id;
        const genre = await genreDao.getById(id);
        res.render('genres-update', {genre});
    } catch (err) {
        console.log('Valami hiba történt!');
        console.error(err);
        res.render('error', {error: err.message});
    }
});

router.post('/genres-update/:id', async function(req, res){
    try {
        const id = req.params.id;
        const body = req.body;
        console.log(body)
        // const genre = await genreDao.getById(id);
        // const body.genre = await genreDao.update(genre);
        const genres = await genreDao.read();
        res.render('genres', {genres});
    } catch (err) {
        console.log('Valami hiba történt!');
        console.error(err);
        res.render('error', {error: err.message});
    }
});

router.get('/actors', async function(req,res){
    try {
        const actors = await actorsDao.read();
        res.render('actors', {actors});
    } catch (err) {
        console.log('Valami hiba történt!');
        console.error(err)
        res.render('error', {error: err.message});
    }
})

// TODO: Genre and Actors READ implementation
// + 1. ejs page (genres, actors)
// + 2. GET+Render (res.render)


module.exports = router;