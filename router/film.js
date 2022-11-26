const express = require('express');
const router = express.Router();

const FilmDAO = require('../dao/filmDao');
const filmDAO = new FilmDAO();

router.post('/film', async function (req,res){
    const film = req.body;
    await filmDAO.create(film);
    res.status(200).send({message: 'New film added!'});
});

router.get('/film', async function (req, res){
    try{
        const film = await FilmDAO.read();
        console.log(film);
        res.send({film});
    }catch (err) {
        console.log('Something bad happend..:(');
        console.error(err);
        res.send({error: err.message});
    }
});

// /films-update
router.get('/films-update/:id', async function(req, res){
    try{
        const id = req.params.id;
        const film = await filmDAO.getById(id);
        console.log(film)
        res.render('film-update', {film});
    } catch (err) {
        console.log('Something bad happend!');
        console.error(err);
        res.render('error', {error: err.message});
    }
});
// endpoint
router.post('/film-update', async function (req, res){
    try {
        console.log('Update film!');
        const updatedFilm = req.body.updatedFilm;
        await filmDAO.update(updatedFilm);
        res.status(200).send({message: 'Film update is succsessful!'});
    } catch(e) {
        console.log(e);
        res.status(500).send('Unexpected error!');
    }

})

// /films-create
router.get('/films-create', async function(req, res){
    res.render('film-create');
});
router.post('/film-create', async function (req, res){
    try {
        console.log('Create film!');
        const film = req.body.film;
        await filmDAO.create(film);

        const filmId = (await filmDAO.getLatestFilm()).id;

        // Create classifications
        const genres = req.body.genres;
        const genresList = genres.split(', ');
        await filmDAO.addGenresToFilm(filmId, genresList);

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
        await filmDAO.delete(id);
        console.log(`Succsessful deletion! id=${id}`)
        res.status(200).send({message: 'Succsessful deletion!', id});
    } catch (err) {
        console.log('Something bad happend..:(!');
        console.log(err);
        res.status(500).send(err.message);
    }
})
module.exports = router;