var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
c.width=640;
c.height=480;
const KEYS = [37,38,39,40];

function Vector(x,y){
	this.x=x;
	this.y=y;
	this.mag=function(){return Math.sqrt(this.x*this.x+this.y*this.y);};
	this.normalize=function(){
					let mag=this.mag();
					this.x=this.x/mag;
					this.y=this.y/mag;
					}
}
var player=
{
	width:20,
	height:20,
	pos:new Vector(320,240),
	vel:new Vector(0,0),
	health:60,
	mana:10,
	color:"red",
};
var enemy=
{
	width:20,
	height:20,
	pos:new Vector(120,140),
	vel:new Vector(0,0),
	health:60,
	color:"green",
}

function draw(obj){
	ctx.fillStyle=obj.color;
	ctx.fillRect(obj.pos.x,obj.pos.y,obj.width,obj.height);
}

function manageControls(e){
	if(e.keyCode==KEYS[0]){
		player.vel.x=-2;
	}if(e.keyCode==KEYS[1]){
		player.vel.y=-2;
	}if(e.keyCode==KEYS[2]){
		player.vel.x=2;
	}if(e.keyCode==KEYS[3]){
		player.vel.y=2;
	}
}
function keyup(e){
	if(e.keyCode==KEYS[0] || e.keyCode==KEYS[2]){
		player.vel.x=0;
	}if(e.keyCode==KEYS[1] || e.keyCode==KEYS[3]){
		player.vel.y=0;
	}
}
function updateObject(player){
	player.pos.x+=player.vel.x;
	player.pos.y+=player.vel.y;
}
function click(e){
	player.vel.x=e.clientX-player.pos.x;
	player.vel.y=e.clientY-player.pos.y;
	player.vel.normalize();
}
function update(){
	ctx.clearRect(0,0,c.width,c.height);
	updateObject(player);
	updateObject(enemy);
	draw(enemy);
	draw(player);
	//follow player
	enemy.vel.x=(player.pos.x-enemy.pos.x);
	enemy.vel.y=(player.pos.y-enemy.pos.y);
	var mag=enemy.vel.mag();
	console.log(mag);
	enemy.vel.x=enemy.vel.x/mag;
	enemy.vel.y=enemy.vel.y/mag;

	//draw bars
	ctx.fillStyle="red";
	ctx.strokeRect(10,10,200,10);
	ctx.fillRect(10,10,player.health/100*200,10);
	ctx.fillStyle="blue";
	ctx.strokeRect(10,30,200,10);
	ctx.fillRect(10,30,player.mana/100*200,10);
	
	requestAnimationFrame(update);
}

update();
document.addEventListener("keydown",manageControls);
document.addEventListener("keyup",keyup);
document.addEventListener("click",click);