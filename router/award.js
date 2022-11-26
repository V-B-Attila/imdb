const express = require('express');
const router = express.Router();

const DijDAO = require('../dao/awardDao');
const dijDAO = new DijDAO();

router.post('/award', async function(req,res){
    const dij = req.body;
    await dijDAO.create(dij);
    res.status(200).send({message: 'New award added!'});
})

router.get('/award', async function(req,res){
    try{
        const dij = await dijDAO.read();
        console.log(dij);
        res.send({dij});
    }catch (err) {
        console.log('Something bad happend..:(!');
        console.error(err);
        res.send({error: err.message});
    }
})

router.put('/award', async function (req,res){
    const dij = req.body;
    await dijDAO.update(dij);
    res.status(200).send({message: 'Update successful!'});
})

router.delete('/awards/:id', async function(req, res){
    try {
        console.log('Törlési Kérés a szerver felé!')
        const id = req.params.id;
        await dijDAO.delete(id);
        console.log(`Succsessful deletion! id=${id}`)
        res.status(200).send({message: 'Succsessful deletion!', id});
    } catch (err) {
        console.log('Something bad happend..:(!');
        console.log(err);
        res.status(500).send(err.message);
    }
})


module.exports = router;