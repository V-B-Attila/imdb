const express = require('express');
const router = express.Router();

const MufajDAO = require('../dao/mufajDAO');
const mufajDAO = new MufajDAO();


router.post('/mufaj', async function(req,res){
    const mufaj = req.body;
    await mufajDAO.create(mufaj);
    res.status(200).send({message: 'Új műfaj sikeres felvétele!'});
})

router.get('/mufaj', async function(req,res){
    try{
        const mufaj = await mufajDAO.read();
        res.send({mufaj});
    }catch (err) {
        console.log('): Valami hiba történt! :(');
        console.error(err);
        res.send({error: err.message});
    }
})

router.put('mufaj', async function(req,res){
    const mufaj = req.body;
    await mufajDAO.update(mufaj);
    res.status(200).send({message: 'Sikeres frissítés!'});
})

router.delete('/genres/:id', async function(req, res){
    try {
        console.log('Törlési Kérés a szerver felé!')
        const id = req.params.id;
        await mufajDAO.delete(id);
        console.log(`Sikeres törlés Műfaj id=${id}`)
        res.status(200).send({message: 'Sikeres törlés!', id});
    } catch (err) {
        console.log('Váratlan hiba történt');
        console.log(err);
        res.status(500).send(err.message);
    }
})

module.exports = router;