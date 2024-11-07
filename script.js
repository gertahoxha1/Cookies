var express = require('express');
var cookieParser = require ('cookie-parser');
var app = express();

app.use(cookieParser());
app.get('/cookieset', function(req,res){
    res.cookie('cookie_name', 'cookie_value');
    res.cookie('company', ' Kompania ');
    res.cookie('name', ' Gerta ');

    res.status(200).send('Gjithqka ne rregull');
});

app.get('/cookieget', function(req,res) {
    res.status(200).send(req.cookies);
})

app.get('/', function(req,res) {
    const username  = req.cookies.name || "Guest";
    const kompania = req.cookies.company || "Kompania";
    res.send('Welcome to,' + kompania + username);
})

const server = app.listen(8001, () => {
    const host = 'localhost';
    const port = server.address().port;
    console.log(`Server is running at http://${host}:${port}`);
});