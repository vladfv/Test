var http = require('http'),
    faye = require('faye');
var express = require('express');
var app = express();

var bayeux = new faye.NodeAdapter({mount: '/faye', timeout: 45});

var express = require('express');
var app = express();

app.configure(function() {
	app.set('view engine', 'jade');
	app.set('views', __dirname + '/views');
	app.use(express.static(__dirname + '/public'));
});

app.get('/:view', function(req, res) {
	res.render(req.params.view);
});

app.get('/', function(req, res) {
	res.send('test');
});

bayeux.attach(app);
app.listen(process.env.PORT || 8000);