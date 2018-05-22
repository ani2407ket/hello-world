var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");

canvas.width=640;
canvas.height=480;
canvas.style.border="solid black";

var position = new Vector(0,0);
var radius = 20;

function clickHandler(e){
	position.x=e.clientX;
	position.y=e.clientY;
	radius=0;
	ctx.globalAlpha=1;
	}
function draw(){
	ctx.strokeStyle="green";
	ctx.lineWidth=3;
	ctx.beginPath();
	
	ctx.arc(position.x,position.y,++radius,0,2*Math.PI);
	ctx.stroke();
	ctx.closePath();
	ctx.globalAlpha-=0.05;
	
}
function update(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	if(radius<20){
		draw();
	}
	requestAnimationFrame(update);
}


document.addEventListener("click",clickHandler);
update();