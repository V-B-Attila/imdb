const express = require('express');
const router = express.Router();

const ActorDao = require('../dao/actorDao');
const actorDao = new ActorDao();

// Read
router.get('/actors', async function(req,res){
    try {
        const actors = await actorDao.read();
        res.render('actor/actors', {actors});
    } catch (err) {
        console.log('Something bad happend..:(!');
        console.error(err)
        res.render('error', {error: err.message});
    }
})

// Create
router.get('/actor-create', async function(req, res){
    res.render('actor/actor-create');
});
router.post('/actor-create', async function (req, res){
    try {
        console.log('Create actor!');
        const actor = req.body.actor;
        await actorDao.create(actor);

        res.status(200).send({message: 'Actor created is successfully!'});
    } catch(e) {
        console.log(e);
        res.status(500).send('Unexpected error!');
    }
})

// Update
router.get('/actors-update/:id', async function(req, res){
    try{
        const id = req.params.id;
        const actor = await actorDao.getById(id);
        res.render('actor/actor-update', {actor});
    } catch (err) {
        console.log('Something bad happened!');
        console.error(err);
        res.render('error', {error: err.message});
    }
});
router.post('/actor-update', async function(req, res){
    try {
        let actor = req.body.actor;
        await actorDao.update(actor);
        res.status(200).send({message: 'update ok'});
    } catch (err) {
        console.log('Something bad happend..:(');
        console.error(err);
        res.render('error', {error: err.message});
    }
})

// Delete
router.delete('/actors/:id', async function(req, res){
    try {
        console.log('Törlési Kérés a szerver felé!')
        const id = req.params.id;
        await actorDao.delete(id);
        console.log(`Succsessful deletion! id=${id}`)
        res.status(200).send({message: 'Succsessful deletion!', id});
    } catch (err) {
        console.log('Something bad happend..:(!');
        console.log(err);
        res.status(500).send(err.message);
    }
})

module.exports = router;