const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors({origin: 'http://localhost:3000'}));

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(bodyParser.json({extended: true}))

const router = require('./router/mainRouter');
const mufajRouter = require('./router/mufaj');

app.use(router);
app.use(mufajRouter);

app.listen(3000, function() {
    console.log('Server is listening at: http://localhost:3000');
});