var canvas=document.getElementById("canvas"),
    ctx=canvas.getContext("2d"),
    width=400,
    height=200,
    player={
        x:width/2,
        y:height-5,
        width:5,
        height:5,
        speed:3,
        velX:0,
        velY:0,
        friction:0.8,
        jumping:false,
        gravity:0.4,
        grounded:false,
    };
keys=[];
canvas.width=width;
canvas.height=height;

var boxes=[];
boxes.push({
    x:0,
    y:0,
    width:10,
    height:height,
});

boxes.push({
    x:0,
    y:height-2,
    width:width,
    height:50,
});

boxes.push({
    x:width-10,
    y:0,
    width:50,
    height:height,
});
boxes.push({
    x: 30,
    y: height-100,
    width: 60,
    height: 10
});
boxes.push({
    x: 70,
    y: height-90,
    width: 30,
    height: 10
});
boxes.push({
    x: 180,
    y: 100,
    width: 80,
    height: 80
});
boxes.push({
    x: 270,
    y: 50,
    width: 40,
    height: 40
});
document.body.addEventListener("keydown",function(e){
    keys[e.keyCode]=true;
});
document.body.addEventListener("keyup",function(e){
    keys[e.keyCode]=false;
});

function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    checkKeyPress();

    player.velX *= player.friction;
    player.velY += player.gravity;


    //if (player.x >= width-player.width) {
    //		player.x = width-player.width;
    //} else if (player.x <= 0) {
    //	player.x = 0;
    //}
    //if(player.y >=height-player.height){
    //	player.y=height-player.height;
    //	player.jumping=false;
    //}
    ctx.fillStyle="black";
    ctx.beginPath();
    player.grounded=false;
    for(i=0;i<boxes.length;i++){
        var dir=colCheck(player,boxes[i]);
        if(dir=="l"||dir=="r"){
            player.velX=0;
            player.jumping=false;
        }else if (dir === "b") {
            player.grounded = true;
            player.jumping = false;
        } else if (dir === "t") {
            player.velY *= -1;
        }
        ctx.rect(boxes[i].x,boxes[i].y,boxes[i].width,boxes[i].height);
    }
    if(player.grounded){player.velY=0;}
    player.x+=player.velX;
    player.y+=player.velY;
    ctx.fill();
    ctx.fillStyle="red";
    ctx.fillRect(player.x,player.y,player.width,player.height);

    requestAnimationFrame(update);
}	
window.addEventListener("load",function(){update();});


