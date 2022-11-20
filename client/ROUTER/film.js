const express = require('express');
const router = express.Router();

const FilmDAO = require('../DAO/filmDAO');
const filmDAO = new FilmDAO();

router.post('/film', async function (req,res){
    const film = req.body;
    await filmDAO.create(film);
    res.status(200).send({message: 'Új film sikeres felvétele!'});
});

router.get('/film', async function (req, res){
    try{
        const film = await FilmDAO.read();
        console.log(film);
        res.send({film});
    }catch (err) {
        console.log('Valami hiba történt');
        console.error(err);
        res.send({error: err.message});
    }
});

router.put('/film', async function (req, res){
    const film = req.body;
    await filmDAO.update(film);
    res.status(200).send({message: 'A film firssítése sikeresen!'});
})

router.put('/film', async function (req, res){
    const id = req.body;
    await filmDAO.delete(id);
    res.status(200).send({message: 'A film törlése sikeres!'});
})

module.exports = router;