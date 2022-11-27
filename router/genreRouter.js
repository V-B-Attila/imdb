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
        const genre = req.body.genre;
        await genreDao.create(genre);
        res.status(200).send({message: 'Genre created is successfully!'});
    } catch(e) {
        console.log(e);
        res.status(500).send('Unexpected error!');
    }

})

// Update
router.get('/genres-update/:id', async function(req, res){
    try {
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
router.delete('/genres/:id', async function(req, res){
    try {
        const id = req.params.id;
        await genreDao.delete(id);
        res.status(200).send({message: 'Successful deletion!', id});
    } catch (err) {
        console.log('Something bad happened..:(!');
        console.log(err);
        res.status(500).send(err.message);
    }
})


module.exports = router;