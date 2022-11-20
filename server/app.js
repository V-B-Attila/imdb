const express = require('express');
const app = express();

// req = request
// res = response
app.get('/filmek', function (req, res) {
    res.send('Batman');
});

app.listen(3001, function() {
    console.log('Server is listening at: http://localhost:3001');
});