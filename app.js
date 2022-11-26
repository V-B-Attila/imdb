const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors({origin: 'http://localhost:3001'}));

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(bodyParser.json({extended: true}))

const router = require('./router/mainRouter');
const mufajRouter = require('./router/genre');
const szineszRouter = require('./router/actor');
const dijRouter = require('./router/award');
const filmRouter = require('./router/film');

app.use(router);
app.use(mufajRouter);
app.use(szineszRouter);
app.use(dijRouter);
app.use(filmRouter);

app.listen(3001, function () {
    console.log('Server is listening at: http://localhost:3001');
});

// const FilmDao = require('./dao/filmDao');
// const filmDao = new FilmDao();
//
// filmDao.getFilmGenres(4).then((genres) => {
//     console.log('Sikeres lekérdezés!);');
//     console.log(genres)
// }).catch((error) => {
//     console.log(error);
// })