const express = require('express');
const router = express.Router();

const SzineszDAO = require('../DAO/szineszDAO');
const szineszDAO = new SzineszDAO();


router.post('/szinesz', async function(req,res){
    const szinesz = req.body;
    await szineszDAO.create(szinesz);
    res.status(200).send({message: 'Új színész létrehozása sikeres!'})
})

router.get('/szinesz', async function(req, res){
    try{
        const szinesz = await szineszDAO.read();
        console.log(szinesz);
        res.send({szinesz});
    }catch (err){
        console.log("Valami hiba történt!");
        console.error(err);
        res.send({error: err.message});
    }
})

router.put('/szinesz', async function(req,res){
    const szinesz = req.body;
    await szineszDAO.update(szinesz);
    res.status(200).send({message: "Sikeres frissítés!"});
})

router.put('/szinesz',async function(req,res){
    const id = req.body;
    await szineszDAO.delete(id);
    res.status(200).send({message: "Sikeres törlés!"});
})

module.exports = router;