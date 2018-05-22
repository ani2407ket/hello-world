	var clusters=[];
	
	var level={
	x:250,
	y:113,
	columns:8,
	rows:8,
	tileWidth:40,
	tileHeight:40,
	tiles:[],
	selectedTile:{selected:false,column:0,row:0},	
};

  // All of the different tile colors in RGB
	var tilecolors = [[255, 128, 128],
                      [128, 255, 128],
                      [128, 128, 255],
                      [255, 255, 128],
                      [255, 128, 255],
                      [128, 255, 255],
                      [255, 255, 255]];

					  
	function init(){
		
		
		for(var i=0;i<level.columns;i++){
			level.tiles[i]=[];
			for(var j=0;j<level.rows;j++){
				level.tiles[i][j]={type:0,shift:0};
			}
		}
	}
	
	//Create a random level
	function createLevel(){
		var done=false;
		
		while(!done){
			
			for (var i=0; i<level.columns; i++) {
                for (var j=0; j<level.rows; j++) {
                    level.tiles[i][j].type = getRandomTile();
                }
			}
			
			resolveClusters();
			findMoves();
			if(move.length>0){
				done=true;
			}
		}
		
		
	}
	
	function resolveClusters(){
		findClusters();
		
		while(clusters.length>0){
			removeClusters();
			shiftTiles();
			findClusters();
		}
	}
	
	function findClusters(){
		clusters=[];
		
		//horizontal
		for(var j=0;j<level.rows;j++){
			var matchlength=1;
			for(var i=0;i<level.columns;i++){
				var checkCluster=false;
				
				if(i==level.columns-1){
					checkcluster=true;
				}else{
					if(level.tiles[i][j].type==level.tiles[i+1][j].type &&
					 level.tiles[i][j].type != -1){
						 matchlength++;
					 }else {
						 checkCluster=true;
					 }
				}
				
				if(checkCluster){
					if(matchlength>=3){
						clusters.push({column:i+1-matchlength,
										row:j,
										length:matchlength,
										horizontal:true,});
					}
					matchlength=1;
				}
			}
		}
		
		//vertical
		for(var i=0;i<level.columns;i++){
			var matchlength=;
			for(var j=0;j<level.rows;j++){
				var checkCluster=false;
				
				if(j==level.rows-1){
					checkCluster=true;
				}else{
					if(level.tiles[i][j].type==level.tiles[i][j+1].type &&
						level.tiles[i][j].type != -1){
							matchlength++;
					}else{
						checkCluster=true;
					}
				}
				
				if(checkCluster){
					if(matchlength>=3){
						clusters.push({column:i,row:j+1-matchlength,
										length:matchlength,horizontal:false});
					}
					
					matchlength=1;
				}
			}
		}
	}