var express = require('express');
var app = express();
var PORT = 3000

var middleWare = {
	requireAuthentication: function (req, res, next){
		console.log('private route hit');
		next()
	},
	logger: function(req, res, next){
		console.log(new Date().toString() + 'Request: ' + req.method + ' ' + req.originalUrl);
		next();
	}
}

app.use(middleWare.logger);

// app.get('/', function(req, res){
// 	res.send('Hello Express!');
// });

app.get('/about', middleWare.requireAuthentication, function(req, res){
	res.send('Hello About!!');
})

app.use(express.static(__dirname + '/public'));
// console.log(__dirname);

app.listen(PORT, function(){
	console.log('Express server started on port ' + PORT + '!')
});
