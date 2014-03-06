

var mapInformations = new function () {	
	this.tileSize = 60; //The size of a tile (e.g 32x32)
	this.rowTileCount = 10; //The number of tiles in a row of our background
	this.colTileCount = 15; //The number of tiles in a cloumn of our background
	this.imageNumTiles = 1; //The number of tiles per row in the tileset image

	//Maps

	this.layer01 = [		
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]	
	];

	this.ground = [
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],	
	];

}




TileEngine = function(pictures) {

	this.pictures = pictures;
	this.draw = function () {
		for (var r = 0; r < mapInformations.rowTileCount; r++) {
			for (var c = 0; c < mapInformations.colTileCount; c++) {
				var tile = mapInformations.ground[r][c];
				var tileRow = (tile / mapInformations.imageNumTiles) | 0;
				var tileCol = (tile % mapInformations.imageNumTiles) | 0;
				this.ctx.drawImage(this.images['grounds'], (tileCol * mapInformations.tileSize), (tileRow * mapInformations.tileSize), mapInformations.tileSize, mapInformations.tileSize, (c * mapInformations.tileSize), (r * mapInformations.tileSize), mapInformations.tileSize, mapInformations.tileSize);

				var tile = mapInformations.layer01[r][c];
				var tileRow = (tile / mapInformations.imageNumTiles) | 0;
				var tileCol = (tile % mapInformations.imageNumTiles) | 0;
				this.ctx.drawImage(this.images['buildings'], (tileCol * mapInformations.tileSize), (tileRow * mapInformations.tileSize), mapInformations.tileSize, mapInformations.tileSize, (c * mapInformations.tileSize), (r * mapInformations.tileSize), mapInformations.tileSize, mapInformations.tileSize);

			}
		}
	}
}