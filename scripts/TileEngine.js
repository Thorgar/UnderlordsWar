

var getMap = function (p_oLevel) {	
	this.tileSize = 60; //The size of a tile (e.g 32x32)
	this.rowTileCount = 14; //The number of tiles in a row of our background
	this.colTileCount = 20; //The number of tiles in a column of our background
	this.imageNumTiles = 1; //The number of tiles per row in the tile-set image

	//Maps
	this.layer2 = p_oLevel.buildingLayer;	
	this.layer1 = p_oLevel.mineralLayer;
	this.ground = p_oLevel.groundLayer;

}

TileEngine = function(ctx, ground, building, p_oLevel) {	
        var mapInformations = new getMap(p_oLevel);
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