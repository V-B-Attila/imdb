const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

const router = require('./router/mainRouter');

app.use(router);

app.listen(3000, function() {
    console.log('Server is listening at: http://localhost:3000');
});