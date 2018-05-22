
	function boxCollider(shape1,shape2){
		var delX=(shape1.x+shape1.width/2)-(shape2.x+shape2.width/2),
		delY=(shape1.y+shape1.height/2)-(shape2.y+shape2.height/2),
		delWidth=shape1.width/2+shape2.width/2,
		delHeight=shape1.height/2+shape2.height/2,
		direction=[];
		
		if(Math.abs(delX)<=delWidth && Math.abs(delY)<=delHeight){
			var offsetX=delWidth-Math.abs(delX);
			var offsetY=delHeight-Math.abs(delY);
			if(Math.abs(offsetX)>=Math.abs(offsetY)){
				if(delY>0){
				direction[0]="bottom";
				}
				else {
				direction[0]="top";
				}
				direction[1]=Math.abs(offsetY);
			}
			else{
				if(delX>0){
				direction[0]="right";
				}
				else {
				direction[0]="left";
				}
				direction[1]=Math.abs(offsetX);
			}
		}
		return direction;
	}
	
	 function draw(obj){
			obj.context.fillStyle=obj.color;
			obj.context.fillRect(obj.x,obj.y,obj.width,obj.height);
		}
	
	function checkCollsion(obj1,obj2){
		var t=boxCollider(obj1,obj2);
		if(t[0]=="top"){
			obj1.y-=t[1];
			obj1.vy=0;
		}else if(t[0]=="bottom"){
			obj1.y+=t[1];
			obj1.vy*=-0.4;
		}else if(t[0]=="left"){
			obj1.x-=t[1];
			obj1.vx=0;
		}else if(t[0]=="right"){
			obj1.x+=t[1];
			obj1.vx=0;
		}
	}
	
	function addKeyboardInput(){
		
	}
	
