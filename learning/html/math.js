function Vector(x,y){
	this.x=x;
	this.y=y;
	this.getMag=function(){return Math.sqrt(this.x*this.x + this.y*this.y)};
}