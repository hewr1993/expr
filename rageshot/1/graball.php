
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<style>
body {
	background: #404040;
}
#container {
	width: 520px;
	height: 520px;
	margin: 80px auto 0 auto;
	background: #e1e1e1;
	border: 1px solid #000;
	-webkit-box-shadow: 0 0 10px #000;
	-moz-box-shadow: 0 0 10px #000;
	-ms-box-shadow: 0 0 10px #000;
	-o-box-shadow: 0 0 10px #000;
	
	position: relative;
}
.peo {
	width: 20px;
	height: 20px;
	background: #fa4a00;
	-webkit-border-radius: 16px;
	-moz-border-radius: 16px;
	-ms-border-radius: 16px;
	-o-border-radius: 16px;
	
	position: absolute;
	top: 600px;
	left: 500px;
}
input {
	width: 40px;
	text-align: center;
}
</style>
</head>

<body>
<div id="container">
	<div class="peo" id="peo"></div>
</div>
<p style="text-align: center;color:#a0a0a0; font-size:12px">方向键控制左右； 跳起速度:<input type="text" value="60" id="vy"/> 重力：<input type="text" value="10" id="g"/></p>

<script>
window.requestAnimationFrame = this.requestAnimationFrame =  (function() {
  return function(/* function FrameRequestCallback */ callback) {
		   window.setTimeout(callback, 1000/60);
		 };
})();
var $ = {};
$.Loop = function (callback, that) {
	var keepUpdating = true,
		lastLoopTime = new Date();
		
	function loop () {
		if (!keepUpdating) { return }
		requestAnimationFrame(loop);
		
		var time = new Date(),
			dt = (time - lastLoopTime) / 1000;
		// 时间间隔太长(大于3秒)，强制拉回dt
		if (dt >= 3) {
			dt = 0.25;
		}
		
		callback.call(that, dt);
		lastLoopTime = time;
	}
	
	// 停止
	this.stop = function () {
		keepUpdating = false;
	}
	
	// 继续
	this.resume = function () {
		keepUpdating = true;
		lastLoopTime = new Date();
		loop();
	}
	
	loop();
	return this;
};	
$.id = function (s) {
	return document.getElementById(s) || s;
};

$.addEvent = function (o, e, f) {
	return o.addEventListener ? o.addEventListener(e, f, false) : o.attachEvent('on'+e, function () { f.call(o) });
};

$.G = function () {
	var looper, left = 250, top = 500,
		obj = $.id('peo'),
		keyHash = {},
		onFloor = (top>=500),
		upTime = 0,
		vy = 80,
		g = 20,
		$vy = $.id('vy'),
		$g = $.id('g');
	
	function init () {
		bind();
		looper = new $.Loop(update);
	}
	function update(dt) {
		vy = parseInt($vy.value);
		g = parseInt($g.value);
		
		if (keyHash[37]) {
			left -= dt*300;
		} else if (keyHash[39]) {
			left += dt*300;
		}
		
//		if (keyHash[38] && onFloor) {
		if (onFloor){
			onFloor = false;
			upTime = 0;
		}
		
		if (!onFloor) {
			upTime += dt;
			var h = 10*vy*upTime - 20*g*upTime*upTime;
			top = 500-h;
		}
		if (top >= 500) {
			onFloor = true;
		}
		
		left = Math.max(0, Math.min(left, 500));
		top = Math.min(top, 500);
		render();
	}
	function render () {
		obj.style['left'] = left + 'px';
		obj.style['top'] = top + 'px';
	}
	function bind () {
		$.addEvent(window, 'keydown', function (e) {
			keyHash[e.keyCode] = 1;
		});
		$.addEvent(window, 'keyup', function (e) {
			keyHash[e.keyCode] = 0;
		})
	}
	
	return {init: init};
}();

$.G.init();
</script>
</body>
</html>
