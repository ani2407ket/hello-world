

function renderObject(obj){
	obj.context.drawImage(
	obj.image,
	obj.sx,obj.sy,
	obj.swidth,obj.sheight,
	obj.x,obj.y,
	obj.width,obj.height,
	);
}
function clearObject(obj){
	obj.context.clearRect(
	obj.x-10,obj.y-10,
	obj.width+10,obj.height+10,
	);
}
function animateObject(obj){
	
	var numberOfFrames=obj.Sequence[2],
	frameWidth=obj.Sequence[3],
	frameHeight=obj.Sequence[4],
	startingX=obj.Sequence[0],
	frameY=obj.Sequence[1],
	frameX=obj.currentFrame*frameWidth + startingX,
	
	var frame={
		context:obj.context,
		sx:frameX,
		sy:frameY,
		swidth:frameWidth,
		sheight:frameHeight
		x:obj.x,
		y:obj.y,
		width:obj.width,
		height:obj.height,		
	}
	
	renderObject(frame);
		
	obj.currentFrame+=1;
	if(obj.currentFrame>=numberOfFrames){
		return true;
		obj.currentFrame=0;
	}
	
}
