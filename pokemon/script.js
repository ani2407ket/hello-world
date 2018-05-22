var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");
canvas.width=640;
canvas.height=480;

var sheet=new Image();
sheet.src="ash.png";

var keyPressed=[];
var updateCount=0;

const DOWN=0,LEFT=1,RIGHT=2,UP=3;
 
var control={
	up:38,
	down:40,
	left:37,
	right:39,
	space:32,		
}
function addkeyPressEvents(){
	document.addEventListener("keydown",function(e){
		keyPressed[e.keyCode]=true;
		
		player.isMoving=true;
	});
	document.addEventListener("keyup",function(e){
		keyPressed[e.keyCode]=false;
		player.vx=0;
		player.vy=0;
		player.currentFrame=0;
		player.isMoving=false;
	});
}
addkeyPressEvents();

var player={
	image:sheet,
	context:ctx,
	sx:0,
	sy:0,
	swidth:64,
	sheight:64,
	friction:0,
	state:RIGHT,
	numberOfFrames:4,
	currentFrame:0,
	isMoving:false,	
	isJumping:false,
	
	speed:2,
	width:64,
	height:64,
	x:0,
	y:0,
	vx:0,
	vy:0,
	ax:0,
	ay:0,
	
	changePosition: function(){
			this.x+=this.vx;
			this.y+=this.vy;
			},
};

function checkKeyPress(){
	if(keyPressed[control.up]){
		player.vy=-player.speed;
		player.state=UP;
	}
	if(keyPressed[control.down]){
		player.vy=player.speed;
		player.state=DOWN;
	}
	if(keyPressed[control.left]){
		player.vx=-player.speed;
		player.state=LEFT;
	}
	if(keyPressed[control.right]){
		player.vx=player.speed;
		player.state=RIGHT;
	}
	
}

function update(){
	if(updateCount==10){
		player.context.clearRect(0,0,canvas.width,canvas.height);
		if(player.isMoving)
		animateObject(player);
		else renderObject(player);
		
		updateCount=0;
	}
	updateCount++;
	checkKeyPress();
	player.changePosition();
	
	window.requestAnimationFrame(update);
	
}
update();



