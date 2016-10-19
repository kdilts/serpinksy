var canvas;
var gfx;

var centerX;
var centerY;

window.onload = function(){
	canvas = document.getElementById('myCanvas');
	gfx = canvas.getContext('2d');

	setScreenSize();

	setInterval(render, 1000/60);
};

window.onresize = function(){
	setScreenSize();
};

setScreenSize = function(){
	canvas.style = "position:absolute; top:0px; left:0px;";
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	centerX = window.innerWidth/2;
	centerY = window.innerHeight/2;
};

render = function(){
	setColor('black');
	gfx.fillRect(0,0,canvas.width,canvas.height);

	setColor('white');
	triangle(centerX, centerY, 300);

	setColor('red');
	triangle(centerX, centerY, 280);
};

triangle = function(x,y,h,r){
	var alt = Math.sqrt(3)/2*h;

	gfx.save()
	if(r){
		gfx.translate(x,y+alt/2);
		gfx.rotate(Math.PI);
	}else{
		gfx.translate(x,y+alt/2);
	}

	gfx.beginPath();

	gfx.moveTo(0,0);
	gfx.lineTo(h/2,0);
	gfx.lineTo(0,-alt);
	gfx.lineTo(-h/2,0);
	gfx.lineTo(0,0);

	gfx.fill();
	gfx.stroke();

	gfx.restore();
}

setColor = function(color){
	gfx.fillStyle = gfx.strokeStyle = color;
};