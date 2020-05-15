var express = require('express');
var app     = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/views', express.static('views'));
app.use('/images', express.static('images'));
app.use('/audio', express.static('audio'));
app.use('/css', express.static('css'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});


const port = process.env.PORT || 3000;
module.exports = app.listen(port, () => console.log('Example app listening on port 3000!'));