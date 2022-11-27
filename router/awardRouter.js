const express = require('express');
const router = express.Router();

const AwardDao = require('../dao/awardDao');
const awardDao = new AwardDao();

// Read
router.get('/awards', async function(req, res){
    try{
        const awards = await awardDao.read();
        res.render('award/awards', {awards});
    } catch (err) {
        console.log('Something bad happend!');
        console.error(err);
        res.render('error', {error: err.message});
    }
});

// Update
router.get('/awards-update/:id', async function(req, res){
    try{
        const id = req.params.id;
        const award = await awardDao.getById(id);
        await awardDao.update(award);

        res.render('award/award-update', {award});
    } catch (err) {
        console.log('Something bad happend!');
        console.error(err);
        res.render('error', {error: err.message});
    }
});
router.post('/award-update', async function (req, res){
    try {
        const award = req.body.award;
        await awardDao.update(award);
        res.status(200).send({message: 'Award update was successful!'});
    } catch(e) {
        console.log(e);
        res.status(500).send('Unexpected error!');
    }
})

// Create
router.get('/award-create', async function(req, res){
    res.render('award/award-create');
});
router.post('/award-create', async function (req, res){
    try {
        await awardDao.create(req.body.award);
        res.status(200).send({message: 'Award created is successfully!'});
    } catch(e) {
        console.log(e);
        res.status(500).send('Unexpected error!');
    }

})

// Delete
router.delete('/awards/:id', async function(req, res){
    try {
        const id = req.params.id;
        await awardDao.delete(id);
        res.status(200).send({message: 'Succsessful deletion!', id});
    } catch (err) {
        console.log('Something bad happend..:(!');
        console.log(err);
        res.status(500).send(err.message);
    }
})


module.exports = router;