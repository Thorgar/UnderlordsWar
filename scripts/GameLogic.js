// ----------------------------------
// Game class
Game = function () {
	this.posX = 0;
	this.posY = 0;
	this.velX = 100;
	this.velY = 100;
	this.sizeX = 20;
	this.sizeY = 40;
	this.gravityY = 900;	
	this.paused = false;
	this.images = {};
	this.InGameMenu = null;
}
Game.prototype.Tick = function (elapsed) {
	fps.update(elapsed);	
	this.Logic(elapsed);
	this.Render(elapsed);
}

Game.prototype.Logic = function (elapsed) {
	// --- Input
	InputManager.padUpdate();
	// --- Logic
	if (InputManager.padPressed & InputManager.PAD.CANCEL) {
		this.paused = true;
		this.StartInGameMenu();		
	}
	
	if (InputManager.padPressed & InputManager.PAD.OK)
	{
		var coordsX = Math.floor((InputManager.lastMouseX-20) / 60);
		var coordsY = Math.floor((InputManager.lastMouseY-20) / 60);	
		var clickedCoords = Level1.mineralLayer[coordsY][coordsX];
		
		switch (clickedCoords)
		{
			case 2:
			Level1.mineralLayer[coordsY][coordsX] = 3;			
			break;
			case 3:
			Level1.mineralLayer[coordsY][coordsX] = 2;			
			break;			
			case 4:
			Level1.mineralLayer[coordsY][coordsX] = 5;
			break;
			case 5:
			Level1.mineralLayer[coordsY][coordsX] = 4;			
			break;
		}		
	}
	
	if (!this.paused) {
		this.posX += this.velX*elapsed;
		this.posY += this.velY*elapsed;
		// Collision detection and response
		if ( (this.posX <= 0 && this.velX < 0) || (this.posX >= canvas.width-this.sizeX && this.velX > 0) )
			this.velX = -this.velX;
		if ( (this.posY <= 0 && this.velY < 0) || (this.posY >= canvas.height-this.sizeY && this.velY > 0) )
			this.velY = -this.velY;

	}
}
Game.prototype.Render = function (elapsed) {
	// Clear the screen		
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	// Render objects	
  
	TileEngine(ctx,this.images['grounds'], this.images['buildings'], Level1);
	ctx.drawImage(this.images['units'], this.posX, this.posY);		
	ctx.fillText("x = " +(InputManager.lastMouseX-20),70, 100);
	ctx.fillText("y = " +(InputManager.lastMouseY-20),70, 150);
	
}

Game.prototype.GetPath = function () {
	this.grid = new PF.Grid(5,3);
	this.grid.setWalkableAt(0,1, false);	
	this.finder = new PF.AStarFinder();
	this.path = this.finder.findPath(1,2,4,2,this.grid);
}

Game.prototype.StartInGameMenu = function () {
	InputManager.reset();
	var bindThis = this;
	this.InGameMenu = new Menu("In-game Menu",
			["Continue", "Quit"],
			"",
			70, 50, 400,
			function (numItem) {
			if (numItem == 0) {
				GameLoopManager.run(function (elapsed) {
					bindThis.Tick(elapsed);
				});
				bindThis.paused = false;
				bindThis.InGameMenu = null;
			} else if (numItem == 1)
				StartMainMenu();
		},
			function (elapsed) {
			bindThis.Render(elapsed);
		});
	GameLoopManager.run(function (elapsed) {
		bindThis.InGameMenu.Tick(elapsed);
	});
}
