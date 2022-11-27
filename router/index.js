const index = require('express').Router();

const actorRouter = require('./actorRouter.js');
const awardRouter = require('./awardRouter.js');
const filmRouter = require('./filmRouter.js');
const genreRouter = require('./genreRouter.js');

index.use('', actorRouter)
index.use('', awardRouter)
index.use('', filmRouter)
index.use('', genreRouter)

module.exports = index;