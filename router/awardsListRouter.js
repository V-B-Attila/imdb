const express = require('express');
const router = express.Router();

const AwardListDao = require('../dao/awardsListDao');
const awardListDao = new AwardListDao();

// Read
router.get('/awards-list', async function(req, res){
    try{
        const awardsList = await awardListDao.readWithNames();
        console.log(awardsList);
        res.render('awards-list', {awardsList});
    } catch (err) {
        console.log('Something bad happend!');
        console.error(err);
        res.render('error', {error: err.message});
    }
});


module.exports = router;