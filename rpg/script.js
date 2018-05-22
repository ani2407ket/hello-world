canvas.width=64*8;
canvas.height=64*8;
var spriteSheet= new Image();
spriteSheet.src="tiles.png";

function getTile(map,col,row){
	return map.tiles[row*map.cols+col];
	} 
function renderMap(map){
	for(i=0;i<map.cols;i++){
		for(j=0;j<map.rows;j++){
		var tile=getTile(map,i,j);
		if(tile!=0){
			ctx.drawImage(
			spriteSheet,
			(tile-1)*map.tileSize,
			0,
			map.tileSize,
			map.tileSize,
			i*map.tileSize,
			j*map.tileSize,
			map.tileSize,
			map.tileSize,
			);
			}
		}
	}
}
const GREEN_TILE=1
var bgMap={
	tileSize:64,
	cols:8,
	rows:8,
	tiles: [
	    1, 1, 3, 2, 3, 1, 1, 1,
	    3, 3, 3, 2, 3, 1, 1, 1,
	    2, 2, 2, 2, 3, 1, 1, 1,
	    3, 3, 3, 2, 3, 3, 3, 3,
	    1, 1, 3, 2, 2, 2, 2, 2,
	    1, 1, 3, 3, 2, 3, 3, 3,
	    1, 1, 1, 3, 2, 3, 1, 1,
	    1, 1, 1, 3, 2, 3, 1, 1
	  ],
	  };
var treeMap={
	tileSize:64,
	cols:8,
	rows:8,
	tiles: [
	   4, 4, 4, 0, 4, 5, 5, 5,
	   0, 0, 0, 0, 4, 5, 5, 5,
	   4, 4, 4, 0, 4, 4, 4, 4,
	   0, 0, 4, 0, 0, 0, 0, 0,
	   5, 5, 4, 4, 0, 4, 4, 4,
	   5, 5, 0, 4, 0, 4, 0, 0,
	   5, 5, 5, 4, 0, 4, 5, 5,
	   5, 5, 5, 4, 0, 4, 5, 5, 
	  ],
	  };
	 
renderMap(bgMap);
renderMap(treeMap);

