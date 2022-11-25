const express = require('express');
const router = express.Router();

const MufajDAO = require('../dao/genreDao');
const mufajDAO = new MufajDAO();


router.post('/genre', async function(req,res){
    const mufaj = req.body;
    await mufajDAO.create(mufaj);
    res.status(200).send({message: 'New genre added!'});
})

router.get('/genre', async function(req,res){
    try{
        const mufaj = await mufajDAO.read();
        res.send({mufaj});
    }catch (err) {
        console.log('Something bad happend..:(!');
        console.error(err);
        res.send({error: err.message});
    }
})

router.put('genre', async function(req,res){
    const mufaj = req.body;
    await mufajDAO.update(mufaj);
    res.status(200).send({message: 'Update successful!'});
})

router.delete('/genres/:id', async function(req, res){
    try {
        console.log('Törlési Kérés a szerver felé!')
        const id = req.params.id;
        await mufajDAO.delete(id);
        console.log(`Succsessful deletion! id=${id}`)
        res.status(200).send({message: 'Succsessful deletion!', id});
    } catch (err) {
        console.log('Something bad happend..:(!');
        console.log(err);
        res.status(500).send(err.message);
    }
})

module.exports = router;