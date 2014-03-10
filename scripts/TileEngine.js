

var mapInformations = new function () {	
	this.tileSize = 60; //The size of a tile (e.g 32x32)
	this.rowTileCount = 14; //The number of tiles in a row of our background
	this.colTileCount = 20; //The number of tiles in a cloumn of our background
	this.imageNumTiles = 1; //The number of tiles per row in the tileset image

	//Maps
	this.layer2 = [		
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
		[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 1, 0, 0, 0, 0, 0],
		[0, 1, 5, 5, 5, 1, 1, 1, 1, 1, 6, 6, 6, 6, 1, 0, 0, 0, 0, 0],
		[0, 1, 5, 5, 5, 1, 1, 3, 1, 1, 6, 6, 6, 6, 1, 0, 0, 0, 0, 0],
		[0, 1, 5, 5, 5, 1, 1, 1, 1, 1, 6, 6, 6, 6, 1, 0, 0, 0, 0, 0],
		[0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],		
	];
	
	this.layer1 = [		
		[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		[2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		[2, 2, 2, 2, 2, 2, 1, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		[2, 2, 2, 2, 2, 2, 1, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2],
		[2, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 2, 2, 4, 4, 2],
		[2, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 2, 2, 4, 4, 2],
		[2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 4, 2, 2],
		[2, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 2, 2, 4, 2, 2],
		[2, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2],
		[2, 2, 2, 2, 2, 2, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		[2, 2, 2, 2, 2, 2, 5, 5, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		[2, 4, 2, 2, 2, 2, 5, 5, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		[2, 4, 4, 2, 2, 2, 5, 5, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		[2, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],		
	];

	this.ground = [
		[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
		[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
		[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
		[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
		[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
		[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
		[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
		[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
		[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
		[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
		[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
		[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
		[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
		[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
	];

}




TileEngine = function(ctx, ground, building, layer2,layer3) {		
		this.ctx 
		for (var r = 0; r < mapInformations.rowTileCount; r++) {
			for (var c = 0; c < mapInformations.colTileCount; c++) {
				var tile = mapInformations.ground[r][c];
				var tileRow = (tile / mapInformations.imageNumTiles) | 0;
				var tileCol = (tile % mapInformations.imageNumTiles) | 0;
				this.ctx.drawImage(ground, (tileCol * mapInformations.tileSize), (tileRow * mapInformations.tileSize), mapInformations.tileSize, mapInformations.tileSize, (c * mapInformations.tileSize), (r * mapInformations.tileSize), mapInformations.tileSize, mapInformations.tileSize);

				var tile = mapInformations.layer1[r][c];
				var tileRow = (tile / mapInformations.imageNumTiles) | 0;
				var tileCol = (tile % mapInformations.imageNumTiles) | 0;
				this.ctx.drawImage(ground, (tileCol * mapInformations.tileSize), (tileRow * mapInformations.tileSize), mapInformations.tileSize, mapInformations.tileSize, (c * mapInformations.tileSize), (r * mapInformations.tileSize), mapInformations.tileSize, mapInformations.tileSize);			
				
				var tile = mapInformations.layer2[r][c];
				var tileRow = (tile / mapInformations.imageNumTiles) | 0;
				var tileCol = (tile % mapInformations.imageNumTiles) | 0;
				this.ctx.drawImage(building, (tileCol * mapInformations.tileSize), (tileRow * mapInformations.tileSize), mapInformations.tileSize, mapInformations.tileSize, (c * mapInformations.tileSize), (r * mapInformations.tileSize), mapInformations.tileSize, mapInformations.tileSize);
		}
	}
}