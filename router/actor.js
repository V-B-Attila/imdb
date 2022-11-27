const express = require('express');
const router = express.Router();

const SzineszDAO = require('../dao/actorDao');
const szineszDAO = new SzineszDAO();


router.post('/actor', async function(req,res){
    const szinesz = req.body;
    await szineszDAO.create(szinesz);
    res.status(200).send({message: 'New actor added!'})
})

router.get('/actor', async function(req, res){
    try{
        const szinesz = await szineszDAO.read();
        console.log(szinesz);
        res.send({szinesz});
    }catch (err){
        console.log("Something bad happend..:(!");
        console.error(err);
        res.send({error: err.message});
    }
})

router.get('/actors-update/:id', async function(req, res){
    try{
        const id = req.params.id;
        const film = await szineszDAO.getById(id);
        console.log(film)
        res.render('actor-update', {film});
    } catch (err) {
        console.log('Something bad happend!');
        console.error(err);
        res.render('error', {error: err.message});
    }
});

router.delete('/actors/:id', async function(req, res){
    try {
        console.log('Törlési Kérés a szerver felé!')
        const id = req.params.id;
        await szineszDAO.delete(id);
        console.log(`Succsessful deletion! id=${id}`)
        res.status(200).send({message: 'Succsessful deletion!', id});
    } catch (err) {
        console.log('Something bad happend..:(!');
        console.log(err);
        res.status(500).send(err.message);
    }
})

router.get('/actors-update/:id', async function(req, res){
    try{
        const id = req.params.id;
        const actor = await szineszDAO.getById(id);
        console.log(actor);
        res.render('actor-update', {actor});
    } catch (err) {
        console.log('Something bad happend!');
        console.error(err);
        res.render('error', {error: err.message});
    }
});
router.post('/actor-update', async function(req, res){
    try {
        let updatedActor = req.body.actor;
        await szineszDAO.update(updatedActor);
        res.status(200).send({message: 'update ok'});
    } catch (err) {
        console.log('Something bad happend..:(');
        console.error(err);
        res.render('error', {error: err.message});
    }
})

router.get('/actor-create', async function(req, res){
    res.render('actor-create');
});
router.post('/actor-create', async function (req, res){
    try {
        console.log('Create actor!');
        const actor = req.body.actor;
        await szineszDAO.create(actor);

        // const actorID = (await szineszDAO.getLatestActor()).id;

        // Create classifications
        // const genres = req.body.genres;
        // const genresList = genres.split(', ');
        // await filmDAO.addGenresToFilm(filmId, genresList);

        res.status(200).send({message: 'Actor created is successfully!'});
    } catch(e) {
        console.log(e);
        res.status(500).send('Unexpected error!');
    }

})

module.exports = router;