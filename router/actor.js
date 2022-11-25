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

router.put('/actor', async function(req,res){
    const szinesz = req.body;
    await szineszDAO.update(szinesz);
    res.status(200).send({message: "Update successful!"});
})

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

module.exports = router;