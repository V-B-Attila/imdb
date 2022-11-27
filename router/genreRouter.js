const express = require('express');
const router = express.Router();

const GenreDao = require('../dao/genreDao');
const genreDao = new GenreDao();

// Read
router.get('/genres', async function(req, res){
    try{
        const genres = await genreDao.read();
        res.render('genre/genres', {genres});
    } catch (err) {
        console.log('Something bad happend!');
        console.error(err);
        res.render('error', {error: err.message});
    }
});

// Create
router.get('/genre-create', async function(req, res){
    res.render('genre/genre-create');
});
router.post('/genre-create', async function (req, res){
    try {
        console.log('Genre film!');
        const genre = req.body.film;
        await genreDao.create(film);

        // const genreId = (await genreDao.getLatestFilm()).id;

        // Create classifications
        // const genres = req.body.genres;
        // const genresList = genres.split(', ');
        // await filmDAO.addGenresToFilm(filmId, genresList);

        res.status(200).send({message: 'Genre created is successfully!'});
    } catch(e) {
        console.log(e);
        res.status(500).send('Unexpected error!');
    }

})

// Update
router.get('/genres-update/:id', async function(req, res){
    try{
        const id = req.params.id;
        const genre = await genreDao.getById(id);
        res.render('genre/genres-update', {genre});
    } catch (err) {
        console.log('Something bad happend!');
        console.error(err);
        res.render('error', {error: err.message});
    }
});
router.post('/genres-update', async function(req, res){
    try {
        let updatedGenre = req.body.genre;
        await genreDao.update(updatedGenre);
        res.status(200).send({message: 'update ok'});
    } catch (err) {
        console.log('Something bad happend..:(');
        console.error(err);
        res.render('error', {error: err.message});
    }
});

// Delete


module.exports = router;