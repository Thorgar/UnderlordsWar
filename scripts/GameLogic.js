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
  
	TileEngine(ctx,this.images['grounds'], this.images['buildings']);
	ctx.drawImage(this.images['units'], this.posX, this.posY);		
	
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
