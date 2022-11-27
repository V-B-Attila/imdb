const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router');

app.use(cors({origin: 'http://localhost:3001'}));

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(bodyParser.json({extended: true}))

app.use(router);

app.listen(3001, function () {
    console.log('Server is listening at: http://localhost:3001');
});