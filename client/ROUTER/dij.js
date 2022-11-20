const express = require('express');
const router = express.Router();

const DijDAO = require('../DAO/dijDAO');
const dijDAO = new DijDAO();

router.post('/dij', async function(req,res){
    const dij = req.body;
    await dijDAO.create(dij);
    res.status(200).send({message: 'Sikeres díj létrehozás!'});
})

router.get('/dij', async function(req,res){
    try{
        const dij = await dijDAO.read();
        console.log(dij);
        res.send({dij});
    }catch (err) {
        console.log('Valami hiba tortént!');
        console.error(err);
        res.send({error: err.message});
    }
})

router.put('/dij', async function (req,res){
    const dij = req.body;
    await dijDAO.update(dij);
    res.status(200).send({message: 'Sikeres frissítés!'});
})

router.put('/dij', async function(req,res){
    const id = req.body;
    await dijDAO.delete(id);
    res.status(200).send({message: 'Sikeres törlés!'});
})


module.exports = router;