var	http = require('http'),
	socketio = require('socket.io'),
	fs = require('fs');

//Establish HTTP Protocol
var	app = http.createServer( function(req, res){
	fs.readFile(__dirname + '/space.php', function(err, data){
		res.writeHead(200);
		res.end(data);
	});
});
app.listen(8124);
console.log("Http Server Start at 8124");

var io = socketio.listen(app);

//WebSocket Shake Hands
io.sockets.on('connection', function(socket){
	socket.on('msg', function(data){
		console.log('Message from Client...');
		console.log(data);
//		socket.broadcast.emit('user message', data);
		socket.broadcast.emit(data.ip, data);
	});
});
