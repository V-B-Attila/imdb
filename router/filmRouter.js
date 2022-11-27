const express = require('express');
const router = express.Router();

const FilmDao = require('../dao/filmDao');
const filmDao = new FilmDao();

router.get('/', async function (req, res) {
    const films = await filmDao.read();

    res.render('index', {films});
})

// /films-update
router.get('/films-update/:id', async function(req, res){
    try{
        const id = req.params.id;
        const film = await filmDao.getById(id);
        res.render('film/film-update', {film});
    } catch (err) {
        console.log('Something bad happend!');
        console.error(err);
        res.render('error', {error: err.message});
    }
});
router.post('/film-update', async function (req, res){
    try {
        console.log('Update film!');
        const updatedFilm = req.body.updatedFilm;
        await filmDao.update(updatedFilm);
        res.status(200).send({message: 'Film update is succsessful!'});
    } catch(e) {
        console.log(e);
        res.status(500).send('Unexpected error!');
    }

})

// /films-create
router.get('/films-create', async function(req, res){
    res.render('film/film-create');
});
router.post('/film-create', async function (req, res){
    try {
        console.log('Create film!');
        const film = req.body.film;
        await filmDao.create(film);

        const filmId = (await filmDao.getLatestFilm()).id;

        // Create classifications
        const genres = req.body.genres;

        if (genres !== '') {
            const genresList = genres.split(', ');
            await filmDao.addGenresToFilm(filmId, genresList);
        }

        console.log('Film created successfully!');
        res.status(200).send({message: 'Film created is successfully!'});
    } catch(e) {
        console.log(e);
        res.status(500).send('Unexpected error!');
    }

})

router.delete('/films/:id', async function(req, res){
    try {
        console.log('Törlési Kérés a szerver felé!')
        const id = req.params.id;
        await filmDao.delete(id);
        console.log(`Succsessful deletion! id=${id}`)
        res.status(200).send({message: 'Succsessful deletion!', id});
    } catch (err) {
        console.log('Something bad happend..:(!');
        console.log(err);
        res.status(500).send(err.message);
    }
})


module.exports = router;