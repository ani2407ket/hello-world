
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
	obj.sy=obj.state*obj.sheight;
	obj.sx=obj.currentFrame*obj.swidth;
	renderObject(obj);	
	obj.currentFrame+=1;
	if(obj.currentFrame>=obj.numberOfFrames)obj.currentFrame=0;
	
	
}
