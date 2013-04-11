<!DOCTYPE HTML>
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>男人60秒</title>
<script language="javascript" type="text/javascript">

var KEY = { LEFT : 37, RIGHT : 39, UP : 38, DOWN : 40, A : 65, D : 68, W : 87, S : 83, SPACE : 32, R : 82 };
var input = { l : false, r : false };

var MinSpeed = 15, MaxSpeed = 31, NowSpeed = 25;

var man;

var player = {
	r : 4,
	x : 0,
	y : 0,
	vx : 6,
	vy : NowSpeed,
	g : 1,
	height : 0,
	width : 0
}

player.init = function(){
	this.x = GetID("canvas").width / 2;
	this.width = GetID("canvas").width - this.r;
	this.y = this.height = GetID("canvas").height - this.r;
}

player.GetSpeed = function(){
	var x = 0;
	if (input.l) x -= player.vx;
	if (input.r) x += player.vx;
	return x;
}

player.next = function(){
	this.x += player.GetSpeed();
	this.x = Math.min(Math.max(this.x, this.r), this.width);
	this.vy -= this.g;
	this.y -= this.vy;
	this.y = Math.min(Math.max(this.y, this.r), this.height);
	if (this.y == this.r) this.vy = -this.vy;
	if (this.y == this.height) this.vy = NowSpeed;
}

player.show = function(){
	player.next();

	var can = GetID("canvas");
	var c = can.getContext("2d");
	var imgwidth = player.r * 6, imgheight = player.r * 6;
	c.drawImage(man, player.x - imgwidth / 2, player.y - imgheight / 2, imgwidth, imgheight);

	c = can.getContext("2d");
	c.fillStyle = "#FF0000";
	c.beginPath();
	c.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
	c.closePath();
	c.fill();
};

var Star = function(){
	this.r = 4;
	this.x = 0, this.y = 0;
	this.vx = 0, this.vy = 0;

this.init = function(){
	var r = Math.floor(Math.random() * 91);
	this.vx = Math.sin(r) * StarSpeed;
	this.vy = Math.cos(r) * StarSpeed;
	var width = GetID("canvas").width;
	var height = GetID("canvas").height;
	var w = Math.floor(Math.random() * (width + height * 2));
	if (w < width){
		this.x = w, this.y = 0;
		if (this.x >= width / 2) this.vx *= -1;
	} else 
	if (w < width + height){
		this.x = 0, this.y = w - width;
		if (this.y >= height / 2) this.vy *= -1;
	} else {
		this.x = width, this.y = w - width - height;
		this.vx*= -1;
		if (this.y >= height / 2) this.vy *= -1;
	}
}

this.next = function(){
	this.x += this.vx, this.y += this.vy;
	var width = GetID("canvas").width;
	var height = GetID("canvas").height;
	if (this.x < 0 || this.x > width || this.y < 0){
		this.init();
		return;
	}
	if (this.y >= height)
		this.y = height, this.vy *= -1;
}

this.show = function(){
	this.next();

	var can = GetID("canvas");
	var c = can.getContext("2d");
	c.fillStyle = "#0000FF";
	c.beginPath();
	c.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
	c.closePath();
	c.fill();
}

this.cross = function(){
	var x = this.x - player.x;
	var y = this.y - player.y;
	var r = this.r + player.r;
	return x * x + y * y <= r * r;
}

};

var StarSpeed;
var StarNum;
var MaxStar = 20;
var stars;

var stTime;
var time;
var Cnt;

var Inter;
var TimeStep = 20;

var load = function(){
	clearInterval(Inter);
	Cnt = 0;
	GetID("status").innerHTML = "Running...";
	stTime = new Date();
	player.init();
	StarSpeed = 2, StarNum = 10;
	stars = new Array();
	for (i = 0; i < StarNum; ++i){
		var s = new Star();
		s.init();
		stars[i] = s;
	}
	Inter = setInterval(function(){show();}, TimeStep);
}

var show = function(){
	man = new Image();
	man.src = "man.png";
	var can = GetID("canvas");
	can.width = can.width;
	var img = new Image();
	img.src = "background.png";
	c = can.getContext("2d");
	c.drawImage(img, 0, 0);
	c = can.getContext("2d");
	c.fillStyle = "#000000";
	c.fillRect(0, can.height - 1, can.width, can.height);

	time = (new Date() - stTime) / 1000;
	StarSpeed = Math.round(time / 10) + 2;
	GetID("time").innerHTML = parseFloat(time).toFixed(3);

	player.show();
	while (Math.floor(time / 5) + StarNum > stars.length && stars.length < MaxStar){
		var s = new Star();
		s.init();
		stars[stars.length] = s;
	}
	for (i = 0; i < stars.length; ++i)
		stars[i].show();

	var s = GetID("status").innerHTML;
	s = s.substring(7, s.length);
	if (++Cnt % 10 == 0){
		if (s[s.length - 1] == '.') s = "&nbsp;&nbsp;&nbsp;"; else {
			var i = s.indexOf("&");
			s = s.substring(0, i) + "." + s.substring(i + 6, s.length);
		}
	}
	GetID("status").innerHTML = "Running" + s;

	Dead();
}

var Dead = function(){
	for (i = 0; i < stars.length; ++i)
		if (stars[i].cross()){
			clearInterval(Inter);
			GetID("status").innerHTML = "Game Over!";
			return;
		}
}

var GetID = function(id){
	return document.getElementById(id);
}

var Press = function(event){
	var code = event.keyCode || window.event;
	switch(code){
		case KEY.LEFT: 
		case KEY.A: input.l = true; break;
		case KEY.RIGHT: 
		case KEY.D: input.r = true; break;
		case KEY.UP:
		case KEY.W: NowSpeed = Math.min(NowSpeed + 1, MaxSpeed); break;
		case KEY.DOWN:
		case KEY.S: NowSpeed = Math.max(NowSpeed - 1, MinSpeed); break;
		case KEY.SPACE: play(); break;
		case KEY.R: load(); break;
	}
}

var Release = function(event){
	var code = event.keyCode || window.event;
	switch(code){
		case KEY.LEFT: 
		case KEY.A: input.l = false; break;
		case KEY.RIGHT: 
		case KEY.D: input.r = false; break;
	}
}

var play = function(){
	if (GetID("status").innerHTML == "Game Over!") return;
	var s = GetID("play").innerHTML;
	s = s.substring(17, 21);
	if (s == "Play"){
		GetID("status").innerHTML = "Running...";
		stTime = new Date() - time;
		s = "Pause";
		Inter = setInterval(function(){show();}, TimeStep);
	} else {
		GetID("status").innerHTML = "Pause";
		time = new Date() - stTime;
		s = "Play";
		clearInterval(Inter);
	}
	GetID("play").innerHTML = "<font size=5em>"+s+"</font>";
}

</script>
</head>

<body onLoad="load();" onkeydown="Press(event);" onkeyup="Release(event);">
<center>
	<div id="msg">
		<font color=purple>使用 <font color=blue><b>←→</b></font> 或 <font color=blue><b>ad</b></font> 以 <font color=blue><b>左右</b></font> 移动</font><br>
		<font color=purple>使用 <font color=blue><b>↑↓</b></font> 或 <font color=blue><b>ws</b></font> 以调整<font color=blue><b>高度</b></font></font><br>
		<font color=purple><font color=blue><b>空格</b></font>暂停或播放&nbsp;&nbsp;<font color=blue><b>r</b></font>重新游戏</font><br>
		<font color=red><span id="time"></span> 秒</font><br>
		<font color=green size=4em><b><span id="status"></span></b></font><br>
                <font color=purple><b>hewr2010@gmail.com</b></font><br>
	</div>
	
	<canvas id="canvas" width="715" height="500">
		换个浏览器吧，IE太烂了。。。
	</canvas>
	<br>
	<button onclick="load();"><font size=5em>Restart</font></button>
	<button onclick="play();" id="play"><font size=5em>Pause</font></button>
</center>
</body>
</html>

