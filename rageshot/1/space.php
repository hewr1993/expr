<!DOCTYPE HTML>
<html>

<title>Clone SlingShot</title>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

<?php if (!isset($_GET['ip'])){ ?>

<form action=space.php>
Your IP Address : <font color=green><b><?php echo $_SERVER['REMOTE_ADDR']; ?></b></font><br>
Opponent's IP (-1 for One Player) : <input name="ip" type=text value=-1 /><input type=submit />
</form>

<?php } else { ?>

<head>
<script src="http://10.0.3.43:8124/socket.io/socket.io.js"></script>
<script language="javascript" type="text/javascript">

var myIP, urIP;

<?php if ($_GET['ip'] != -1){ ?>
var socket = io.connect('http://10.0.3.43:8124');

socket.on(<?php echo "'".$_SERVER['REMOTE_ADDR']."'"; ?>, function(data){
	if (data.kind == "InitData"){
		Respond = 1;
		balls = new Array();
		for (var i = 0; i < BallNum; ++i) balls[i] = new BALL(), balls[i].clone(data.balls[i]);
		p = new Array();
		p[0] = new Player(), p[0].clone(data.p[0]);
		p[1] = new Player(), p[1].clone(data.p[1]);
		load();
	} else 
	if (data.kind == "launch"){
		p[NowP].launch();
	} else 
	if (data.kind == "Mouse"){
		Mouse.x = data.Mouse.x, Mouse.y = data.Mouse.y;
	} else
	if (data.kind == "HeartBeat"){
		myP = 0;
		load();
	}
});

function HeartBeat(){
	socket.emit('msg', {kind:"HeartBeat", ip:urIP});
}

function sendMap(){
	socket.emit('msg', {kind:"InitData", ip:urIP, balls:balls, p:p});
}

function sendLaunch(){
	socket.emit("msg", {kind:"launch", ip:urIP});
}

function sendMouse(){
	socket.emit("msg", {kind:"Mouse", ip:urIP, Mouse:Mouse});
}

<?php } ?>

function StartSocket(){
	myIP = <?php echo "'".$_SERVER['REMOTE_ADDR']."'"; ?>;
	urIP = <?php if (isset($_GET['ip'])) echo "'".$_GET['ip']."'"; else echo -1; ?>;
}

function debug(str){
	$("debug").innerHTML = str;
}

function Board(str){
	$("board").innerHTML = str;
}

var eps = Math.pow(0.1, 8);

function sgn(x){
	if (Math.abs(x) <= eps) return 0;
	if (x > -eps) return 1;
	return -1;
}

var Canvas;
var Width, Height, CW, CH;

var G = 20000;

var PAIR = function(){
	this.fi, this.se;
	
this.MP = function(a, b){
	this.fi = a, this.se = b;
}

}

function PO(x, y){
	var p = new po();
	p.x = x, p.y = y;
	return p;
}

var po = function(){
	this.x, this.y;

this.clone = function(o){
	this.x = o.x, this.y = o.y;
}

this.init = function(){
	this.x = Math.floor(Math.random() * Width) + MaxRadius;
	this.y = Math.floor(Math.random() * Height) + MaxRadius;
}

this.len = function(){
	return Math.sqrt(this.x * this.x + this.y * this.y);
}

this.add = function(p){
	var ret = new po();
	ret.x = this.x + p.x, ret.y = this.y + p.y;
	return ret;
}

this.minus = function(p){
	var ret = new po();
	ret.x = this.x - p.x, ret.y = this.y - p.y;
	return ret;
}

this.mul = function(d){
	var ret = new po();
	ret.x = this.x * d, ret.y = this.y * d;
	return ret;
}

this.div = function(d){
	var ret = new po();
	ret.x = this.x / d, ret.y = this.y / d;
	return ret;
}

};

function dot(a, b){
	return a.x * b.x + a.y * b.y;
}

function Unit(p){
	var t = p.len();
	return p.div(t); 
}

var dis = function(a, b){
	return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

function Dissolution(v, o){
	o = Unit(o);
	var t = dot(v, o);
	var ret = new PAIR();
	ret.fi = o.mul(t);
	ret.se = v.minus(ret.fi);
	return ret;
}

var MinRadius = 20, MaxRadius = 30, MinMass = 16, MaxMass = 16777216;

var BALL = function(){
	this.o, this.r, this.m;

this.clone = function(ball){
	this.o = new po();
	this.o.clone(ball.o);
	this.r = ball.r, this.m = ball.m;
}

this.init = function(){
	this.o = new po();
	this.o.init();
	this.r = Math.floor(Math.random() * (MaxRadius - MinRadius + 1)) + MinRadius;
	this.m = Math.floor(Math.random() * (MaxMass - MinMass + 1)) + MinMass;
}

this.show = function(){
	var ctx = Canvas.getContext("2d");
	ctx.fillStyle = GenColor(this.m);
	ctx.beginPath();
	ctx.arc(this.o.x, this.o.y, this.r, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.fill();
}

this.Interact = function(ball){
	var t = dis(this.o, ball.o);
	return sgn(t - this.r - ball.r) <= 0;
}

this.Gravity = function(ball){
	var F = Unit(this.o.minus(ball.o));
	var R = dis(this.o, ball.o);
	var d = this.m * ball.m / R / R;
	F = F.mul(d).div(G);
	return F;
}

this.Collide = function(ball){
	var PV = Dissolution(ball.v, this.o.minus(ball.o));
	PV.fi = PV.fi.mul(-1);
	ball.v = PV.fi.add(PV.se);
	return ball.v;
}

};

var GenColor = function(x){
	var ret="#";
	for (var i = 1; i <= 6; ++i){
		var t = x % 16;
		if (t <= 9) ret += t;
		else ret += String.fromCharCode(("A").charCodeAt(0) + t - 10);
		x = parseInt(x / 16);
	}
	return ret;
}

var $ = function(id){
	return document.getElementById(id);
}

var balls;
var BallNum = 10;

var ShotLen = 300;

var Particle = function(){
	this.o, this.r, this.m, this.v, this.t, this.c;

this.init = function(o){
	this.r = pRad, this.m = MinMass, this.t = 0, this.c = 0;
	o = Unit(Mouse.minus(o)).mul(Math.sqrt(2) * plyRad + this.r).add(o);
	this.o = o;
	this.v = new po();
	var M = Unit(Mouse.minus(o)).mul(Math.min(Mouse.minus(o).len(), ShotLen)).add(o);
	var Delay = 1;
	this.v.x = (M.x - o.x) / (1000 / TimeStep) / Delay;
	this.v.y = (M.y - o.y) / (1000 / TimeStep) / Delay;
}

this.alive = function(){
	if (this.c >= GunPump || this.t * TimeStep > GunTime) return 0;
	return 1;
}

this.next = function(){
	++this.t;
	if (!this.alive()) return;
	var Force = new po();
	Force.x = Force.y = 0;
	for (var i = 0; i < BallNum; ++i){
		var Now = balls[i].Gravity(this);
		Force = Force.add(Now);
	}
	Force = Force.div(this.m);
	this.v = this.v.add(Force);
	this.o = this.o.add(this.v);
	for (var i = 0; i < BallNum; ++i) if (balls[i].Interact(this)){
		this.v = balls[i].Collide(this);
		++this.c;
		break;
	}
	if (sgn(this.o.x - this.r) <= 0 || sgn(CW - this.o.x - this.r) <= 0) this.v.x *= -1;
	if (sgn(this.o.y - this.r) <= 0 || sgn(CH - this.o.y - this.r) <= 0) this.v.y *= -1;
}

this.show = function(){
	var ctx = Canvas.getContext("2d");
	ctx.fillStyle = "#FF0000";
	ctx.beginPath();
	ctx.arc(this.o.x, this.o.y, this.r, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.fill();
	if (!this.alive()) Board("");
	else Board("Time : " + (GunTime - this.t * TimeStep) + " ms   Collide : " + (GunPump - this.c));
}

};

function inRect(o, p, q){
	return sgn(p.x - o.x) <= 0 && sgn(o.x - q.x) <= 0 && sgn(p.y - o.y) <= 0 && sgn(o.y - q.y) <= 0;
}

var plyRad = 20;

var Player = function(){
	this.o, this.r, this.id, this.dead;

this.clone = function(p){
	this.r = p.r;
	this.o = new po();
	this.o.x = p.o.x, this.o.y = p.o.y;
	this.id = p.id, this.dead = p.dead;
}
	
this.init = function(id){
	this.r = plyRad;
	this.o = new po();
	while (1){
		this.o.y = Math.floor(Math.random() * (CH - this.r * 2)) + this.r;
		this.o.x = (CW - this.r * 2) * id + this.r;
		var ok = 1;
		for (var i = 0; i < BallNum; ++i) if (balls[i].Interact(this)){
			ok = 0;
			break;
		}
		if (ok) break;
	}
	this.id = id, this.dead = 0;
}

this.launch = function(){
	NowP = 1 - NowP;
	gun.init(this.o);
}

this.show = function(){
	var img = new Image();
	if (WinP != this.id){
		img.src = "avatar" + this.id + this.alive() + ".png";
	} else img.src = "avatar" + this.id + "2.png";
	var ctx = Canvas.getContext("2d");
	ctx.drawImage(img, this.o.x - this.r, this.o.y - this.r, this.r * 2, this.r * 2);

	if (NowP == this.id && !gun.alive()){
		var M = Unit(Mouse.minus(this.o)).mul(Math.min(Mouse.minus(this.o).len(), ShotLen)).add(this.o);
		var p = M.minus(this.o);
		p = p.add(this.o);
		ctx = Canvas.getContext("2d");
		ctx.moveTo(this.o.x, this.o.y);
		ctx.lineTo(p.x, p.y);
		ctx.stroke();
	}
}

this.alive = function(){
	if (this.dead) return 0;
	if (!gun.alive()) return 1;
	if (sgn(dis(this.o.add(PO(this.r, this.r)), gun.o) - gun.r) <= 0) this.dead = 1; else
	if (sgn(dis(this.o.add(PO(this.r, -this.r)), gun.o) - gun.r) <= 0) this.dead = 1; else
	if (sgn(dis(this.o.add(PO(-this.r, this.r)), gun.o) - gun.r) <= 0) this.dead = 1; else
	if (sgn(dis(this.o.add(PO(-this.r, -this.r)), gun.o) - gun.r) <= 0) this.dead = 1; else
	if (inRect(gun.o, this.o.minus(PO(this.r, this.r + gun.r)), this.o.add(PO(this.r, this.r + gun.r)))) this.dead = 1; else
	if (inRect(gun.o, this.o.minus(PO(this.r + gun.r, this.r)), this.o.add(PO(this.r + gun.r, this.r)))) this.dead = 1;
	if (this.dead){
		GameState = 0, WinP = 1 - this.id;
		Board("P" + (WinP + 1) + " wins!");
		clearInterval(Inter);
		return 0;
	}
	return 1;
}

};

var p;
var NowP, WinP, myP = -1;

var pRad = 5;
var gun;
var GunTime = 15000, GunPump = 3;

var TimeStep = 20;
var Inter;

var show = function(){
	GameState = 1;
	Canvas.width = CW;
	var img = new Image();
	img.src = "background.png";
	var ctx = Canvas.getContext("2d");
	ctx.drawImage(img, 0, 0, CW, CH);
	for (var i = 0; i < BallNum; ++i) balls[i].show();
	if (gun.alive()){
		gun.next();
		gun.show();
	}
	p[0].alive(), p[1].alive();
	p[0].show();
	p[1].show();
}

var GameState = -1;
var Respond = 0;

var load = function(){
	if (GameState == 1) return;
	StartSocket();

	Canvas = $("myCanvas");
	CW = Canvas.width, CH = Canvas.height;
	Width = CW - MaxRadius * 2;
	Height = CH - MaxRadius * 2;
	gun = new Particle();
	gun.t = GunTime;
	NowP = 0, WinP = -1;

	if (urIP == -1 || myP == 0){
		balls = new Array();
		for (var i = 0; i < BallNum; ++i){
			balls[i] = new BALL();
			var itr;
			do{
				balls[i].init();
				itr = 0;
				for (var j = 0; j < i; ++j) if (balls[i].Interact(balls[j])){
					itr = 1;
					break;
				}
			} while (itr);
		}
		p = new Array;
		p[0] = new Player(0);
		p[0].init(0);
		p[0].show();
		p[1] = new Player(1);
		p[1].init(1);
		p[1].show();
		if (urIP != -1) sendMap();
	} else 
	if (myP == -1){
		myP = 1;
		HeartBeat();
		debug("Once your Opponent attends, the Game will start!");
		if (!Respond) return;
	}
	debug("Game Started!");
	show();
	Inter = setInterval(function(){show();}, TimeStep);
}

var Mouse = new po();

var MouseMove = function(event){
	if (urIP == -1 || NowP == myP){
		Mouse.x = event.clientX, Mouse.y = event.clientY;
		if (urIP != -1) sendMouse();
	}
}

var MouseClick = function(event){
	if (gun.alive()) return;
	if (urIP != -1 && NowP != myP) return;
	if (event.which == 1){
		p[NowP].launch();
		if (urIP != -1) sendLaunch();
	}
}

</script>
</head>

<body onload="load();" onmousemove="MouseMove(event);" onmousedown="MouseClick(event);">
<canvas id="myCanvas" width=1200 height=600>nothing</canvas><br>
<span id="board"></span><br>
<span id="debug"></span><span>&nbsp;&nbsp;<font color=blue><b>--hewr2010@gmail.com</b></font></span><br>
</body>

<?php } ?>
</html>
