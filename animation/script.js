var canvas=document.getElementById("canvas");
canvas.width=100;
canvas.height=100;
var ctx=canvas.getContext("2d");
var coinImage=new Image();
coinImage.src="coin.png";

function sprite(options){
	var that={},
	frameIndex=0,
	tickCount=0,
	ticksPerFrame = options.ticksPerFrame || 0;
	numberOfFrames=options.numberOfFrames || 1;
	that.context=options.context;
	that.width=options.width;
	that.height=options.height;
	that.image=options.image;
	that.loop=options.loop;
	
	that.render=function(){
		that.context.clearRect(0, 0, canvas.width, canvas.height);
		that.context.drawImage(
		that.image,
		frameIndex*that.width/numberOfFrames,
		0,
		that.width/numberOfFrames,
		that.height,
		0,
		0,
		canvas.width,
		canvas.height
		)
	};
	
	that.update=function(){
		tickCount++;
		if(tickCount>ticksPerFrame){
			tickCount=0;
			if(frameIndex<numberOfFrames-1){
			frameIndex++;
			}else if(that.loop){frameIndex=0;}
		}
	};
	
	return that;
	
	
}

var coin=sprite({
	context:ctx,
	width:coinImage.width,
	height:coinImage.height,
	image:coinImage,
	ticksPerFrame:3,
	numberOfFrames:10,
	loop:true,});
function gameLoop(){
	window.requestAnimationFrame(gameLoop);
	
	coin.update();
	coin.render();
}
coinImage.addEventListener("load",gameLoop);

















