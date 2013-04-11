<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<script language="javascript" type="text/javascript">
//定义键盘值
var KEY = { D: 68, W: 87, A: 65, S:83, RIGHT:39, UP:38, LEFT:37, DOWN:40, QUICK:17};
//定义输入对象
var input = {
	right	: false,
	up	: false,
	left	: false,
	down	: false,
	quick	: false
};
//小球对象
var player = {
	speed	: 1,
	qspeed	: 2,
	left	: 0,
	top	: 0,
	xleft	: 0,
	dleft	: 0,
	xtop	: 0,
	dtop	: 0,
	r	: 5
}
player.init = function(){
	this.xleft = this.r;
	this.xtop = this.r;
	this.dleft = $("myCanvas").width-this.r;
	this.dtop = $("myCanvas").height-this.r;
	
	this.left = $("myCanvas").width/2;
	this.top = $("myCanvas").height/2;
	
}
player.getSpeed = function(){
	return (input.quick?this.qspeed:this.speed);
}
player.update = function(){	
	if (input.right)	player.left+=player.getSpeed();
	if (input.left)		player.left-=player.getSpeed();
	if (input.down)		player.top+=player.getSpeed();
	if (input.up)		player.top-=player.getSpeed();
	if (player.left>player.dleft)	player.left=player.dleft;
	if (player.left<player.xleft)	player.left=player.xleft;
	if (player.top>player.dtop)	player.top=player.dtop;
	if (player.top<player.xtop)	player.top=player.xtop;
	
	var c=$("myCanvas");
	var cxt=c.getContext("2d");		
	cxt.fillStyle="#FF0000";
	cxt.beginPath();
	cxt.arc(player.left,player.top,player.r,0,Math.PI * 2,true);
	cxt.closePath();
	cxt.fill();
}

//星星
var star = function(){
	this.x = 0;
	this.y = 0;
	this.r = 5;
	this.c = "#00FF00";
	this.ax = 0;
	this.ay = 0;
	this.a = 0;
	this.rAngle = 0;
	this.speed = 0;
	this.isAddX = true;
	this.isAddY = true;
	
	this.init = function(){
		var lon = ($("myCanvas").width+$("myCanvas").height)*2;
		var rlon = Math.floor(Math.random()*(lon+1));
		this.rAngle = Math.floor(Math.random()*91);
		if(rlon<$("myCanvas").width){//上
			this.x = rlon;
			this.y = 0;
		}else if(rlon<$("myCanvas").width+$("myCanvas").height){//右
			this.x = $("myCanvas").width;
			this.y = rlon-$("myCanvas").width;
		}else if(rlon<$("myCanvas").width*2+$("myCanvas").height){//下
			this.x = $("myCanvas").width - (rlon-$("myCanvas").width-$("myCanvas").height);
			this.y = $("myCanvas").height;
		}else{//左
			this.x = 0;
			this.y = $("myCanvas").height-(rlon-$("myCanvas").width*2-$("myCanvas").height);
		}
					
		if(rlon<$("myCanvas").width/2 || rlon>$("myCanvas").width*2+$("myCanvas").height+$("myCanvas").height/2){//左上
			this.isAddX = true;
			this.isAddY = true;
		}else if(rlon<$("myCanvas").width+$("myCanvas").height/2){//右上
			this.isAddX = false;
			this.isAddY = true;
		}else if(rlon<$("myCanvas").width+$("myCanvas").height+$("myCanvas").width/2){//右下
			this.isAddX = false;
			this.isAddY = false;
		}else{//左下
			this.isAddX = true;
			this.sAddY = false;
		}
		this.ax = Math.sin(Math.PI/180*this.rAngle)*star.speed;
		this.ax = this.isAddX?this.ax:0-this.ax;
		this.ay = Math.cos(Math.PI/180*this.rAngle)*star.speed;
		this.ay = this.isAddY?this.ay:0-this.ay;
	}
	
	
	this.update = function(){//更新
		this.x=this.x+this.ax;
		this.y=this.y+this.ay;
		
		if((this.isAddX && this.x>$("myCanvas").width) || (!this.isAddX && this.x<0) || (this.isAddY && this.y>$("myCanvas").height) || (!this.isAddY && this.y<0)){
			this.init();
			return;
		}
		
		//$("message").innerHTML = $("message").innerHTML+"<br> x="+this.x+";y="+this.y;
		//$("message").innerHTML = $("message").innerHTML+"<br>cxt.arc("+Math.round(this.x)+","+Math.round(this.y)+","+this.r+",0,Math.PI * 2,true)";
		var c=$("myCanvas");
		var cxt=c.getContext("2d");		
		cxt.fillStyle=this.c;
		cxt.beginPath();
		cxt.arc(this.x,this.y,this.r,0,Math.PI * 2,true);
		cxt.closePath();
		cxt.fill();
	}
	this.iscollide = function(){//判断是否被撞到
		var x = Math.abs(player.left-this.x);
		var y = Math.abs(player.top-this.y);
		var R = this.r+player.r;
		if(R*R < x*x+y*y){
			return true;
		}
		return false;
	}
}
star.speed = 1;

var press = function(event){
	var code = event.keyCode || window.event;
	switch(code) {
		case KEY.RIGHT:
		case KEY.D: input.right = true; break;
		case KEY.UP:
		case KEY.W: input.up = true; break;
		case KEY.LEFT:
		case KEY.A: input.left = true; break;
		case KEY.DOWN:
		case KEY.S: input.down = true; break;
		case KEY.QUICK: input.quick = true; break;
	}
}

var release = function(event) {
	var code = event.keyCode || window.event;
	switch(code) {
		case KEY.RIGHT:
		case KEY.D: input.right = false; break;
		
		case KEY.UP:
		case KEY.W: input.up = false; break;
		
		case KEY.LEFT:
		case KEY.A: input.left = false; break;
		
		case KEY.DOWN:
		case KEY.S: input.down = false; break;
		
		case KEY.QUICK: input.quick = false; break;
	}
}

var stars = new Array();
var myInter;
var begin;
var time = 0;
//加载事件
var load = function(){
	player.init();
	for(i=0;i<20;i++){
		var s = new star();
		s.init();
		stars[i] = s;
	}
	begin = new Date();
	myInter = setInterval(function(){update();},20);
}

var $ = function(id){
	return document.getElementById(id);
}

//更新方法
var update = function(){
	var c=$("myCanvas");
	c.width = c.width; // Clears the canvas  
	player.update();
	for(i=0;i<stars.length;i++){
		stars[i].update();
	}
	updatetime();
	isDead();
}
//更新时间
var updatetime = function(){	
	var end = new Date();
	var time = Math.round((end-begin)/1000);
	star.speed = Math.round(time/10);
	$("time").innerHTML = time;
}
//判断是否死了
var isDead = function(){
	for(i=0;i<stars.length;i++){
		var flag = stars[i].iscollide();
		if(flag==false){
			clearInterval(myInter);
			alert("失败了");
			return;
		}
	}
}
</script>
</head>

<body onLoad="load();" onkeydown="press(event);" onkeyup="release(event);" >
	<canvas id="myCanvas" width="400" height="400" style=" border:2px solid #F00; left:30%; position:absolute; ">
    <h1>换个好浏览器吧，ie太垃圾了</h1>
    </canvas>
    <div id="message">
    兼容 wasd 和 ↑←↓→<br>
    ctrl 键加速<br>
	<span id="time"></span>秒
    </div>
</body>
</html>

