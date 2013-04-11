<!DOCTYPE html>
<?php
	header("Content-Type: text/html; charset=UTF-8");
?>
<html>
<head>
<script>
var cwidth = 400;
var cheight = 300;
var dicex = 50;
var dicey = 50;
var dicewidth = 100;
var diceheight = 100;
var dotrad =6;
var ctx;
var dx;
var dy;
var firstturn = true;
var point;
function throwdice()
{
	var sum;
	var ch = 1+Math.floor(Math.random()*6);
	sum = ch;
	dx = dicex;
	dy = dicey;
	drawface(ch);
	dx = dicex + 150;
	ch = 1+Math.floor(Math.random()*6);
	sum += ch;
	drawface(ch);
	if(firstturn)
	{
		switch(sum)
		{
			case 7:
			case 11:
				document.f.outcome.value = "你赢了";
				break;
			case 2:
			case 3:
			case 12:
				document.f.outcome.value = "你输了!";
				break;
			default:
				point = sum;
				document.f.pv.value = point;
				firstturn = false;
				document.f.stage.value="继续扔吧。";
				document.f.outcome.value = " ";
		}
	}
	else
	{
		switch(sum)
		{
			case point:
				document.f.outcome.value="你赢了!";
				document.f.stage.value = "再扔一次";
				document.f.pv.value = "  ";
				firstturn = true;
				break;
			case 7:
				document.f.outcome.value="你输了";
				document.f.stage.value = "再扔一次";
				document.f.pv.value = " ";
				firstturn = true;
		}
	}
}
function drawface(n)
{
	ctx = document.getElementById('canvas').getContext('2d');
	ctx.lineWidth = 5;
	
	ctx.clearRect(dx,dy,dicewidth,diceheight);
	ctx.strokeRect(dx,dy,dicewidth,diceheight);
	ctx.fillStyle="#009966";
	switch(n)
	{
		case 1:
		draw1();
		break;
		case 2:
		draw2();
		break;
		case 3:
		draw2();
		draw1();
		break;
		case 4:
		draw4();
		break;
		case 5:
		draw4();
		draw1();
		break;
		case 6:
		draw4();
		draw2mid();
		break;
	}
}
function draw1()
{
	var dotx;
	var doty;
	ctx.beginPath();
	dotx = dx + .5*dicewidth;
	doty = dy + .5*diceheight;
	ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
	ctx.closePath();
	ctx.fill();
}
function draw2()
{
	var dotx;
	var doty;
	ctx.beginPath();
	dotx = dx + 3*dotrad;
	doty = dy + 3*dotrad;
	ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
	ctx.closePath();
	ctx.fill();
	ctx.beginPath();
	dotx = dx + dicewidth - 3*dotrad;
	doty = dy + diceheight - 3*dotrad;
	ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
	ctx.closePath();
	ctx.fill();
}
function draw4()
{
	var dotx;
	var doty;
	ctx.beginPath();
	dotx = dx + 3*dotrad;
	doty = dy + 3*dotrad;
	ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
	dotx = dx + dicewidth - 3*dotrad;
	doty = dy + diceheight - 3*dotrad;
	ctx.closePath();
	ctx.fill();
	ctx.beginPath();
	ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
	dotx = dx + 3*dotrad;
	doty = dy + diceheight - 3*dotrad;
	ctx.closePath();
	ctx.fill();
	ctx.beginPath();
	ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
	ctx.closePath();
	ctx.fill();
	ctx.beginPath();
	dotx = dx + dicewidth - 3*dotrad;
	doty = dy + 3*dotrad;
	ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
	ctx.closePath();
	ctx.fill();
}
function draw2mid()
{
	var dotx;
	var doty;
	ctx.beginPath();
	dotx = dx + 3*dotrad;
	doty = dy + .5*diceheight;
	ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
	dotx = dx + dicewidth - 3*dotrad;
	doty = dy + .5*diceheight;
	ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
	ctx.closePath();
	ctx.fill();
}

</script>
</head>
<body>
<article>游戏规则：
第一次抛出7或者11你胜，如果第一次抛出2,3,12则你输。<br>
如果抛出其他结果(4,5,6,8,9,10),则会记录点数，要继续扔骰子。后面再抛出7，你就输了，<br>
如果正好抛出你的点数则你赢。其他情况游戏继续<br>
</article>
<canvas id="canvas" width="400" height="300">
Your browser doesn't support the HTML5 element canvas.
</canvas>

<form name="f">
Stage:<input type ="text" name="stage" value="First Throw" />
Point:<input type = "text" name ="pv" value= "" />
Outcome:<input type ="text" name="outcome" value="" />
</form>
<input type ="submit" onclick="throwdice()" value="我扔..." />

</body>
</html>
