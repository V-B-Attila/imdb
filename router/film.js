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

router.put('/film', async function (req, res){
    const film = req.body;
    await filmDAO.update(film);
    res.status(200).send({message: 'Film update is succsessful!'});
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