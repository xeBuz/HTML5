var HEIGHT = 200
var WIDTH = 5000
var level = 1

// Inicia el juego
function start(){
	c = Crafty.init(WIDTH, HEIGHT);
	Crafty.Canvas;
	
	Crafty.sprite(16, "kupo.png", {
    	kupo: [0,0],
  	});
  	
  	     
  	// Scenes lists: Loading, Game	
  	Crafty.scene("loading", function() {
    	Crafty.load(["kupo.png"], function() {
      		Crafty.scene("game");
    	});
    
    	// Black background with some loading text
    	Crafty.background("gray");
    	Crafty.e("2D, DOM, Text").attr({w: 100, h: 20, x: 150, y: 120})
      		  .text("Loading")
      		  .css({"text-align": "center"});
  	});
  	
	Crafty.scene("game", function(){
        //Crafty.viewport.x = 100;
        //Crafty.viewport.y = 100;

		CreateLevel(level)
	});
	
	Crafty.scene("loading");
};


// Crea el nivel, modificandolo levemente de acuerdo al parametro que reciba
// * TO DO - Deberia ir agreandole complejidad, analizar esto despues *
function CreateLevel (level) {
	drawFloor();
	createPlayer();  
}

// Dibuja el piso. Tiene el tamaño del nivel, es importante para la gravedad del personaje
function drawFloor(){
	var size = 5
	Crafty.e("2D, DOM, Color, Ground")
		  .attr({x: 0, 
				 y: HEIGHT - size, 
			     w: WIDTH,
			     h: size})
		  .color("black");
};

// Creacion del Jugador
// Lo realiza sólo una vez
function createPlayer(){
	size = 15;
	Crafty.e("2D, DOM, Twoway, Gravity, Color, SpriteAnimation") 
		  .attr({x: 10,	y: 10, w: size, h: size})
		  .color("white")	
		  .gravity("Ground")
    	  .twoway(2,4)
};







Crafty.c('CustomControls', {
    __move: {left: false, right: false, up: false, down: false},    
    _speed: 3,

    CustomControls: function(speed) {
      if (speed) this._speed = speed;
      var move = this.__move;

      this.bind('enterframe', function() {
        // Move the player in a direction depending on the booleans
        // Only move the player in one direction at a time (up/down/left/right)
        if (move.right) this.x += this._speed; 
        else if (move.left) this.x -= this._speed; 
        else if (move.up) this.y -= this._speed;
        else if (move.down) this.y += this._speed;
      }).bind('keydown', function(e) {
        // Default movement booleans to false
        move.right = move.left = move.down = move.up = false;

        // If keys are down, set the direction
        if (e.keyCode === Crafty.keys.RA) move.right = true;
        if (e.keyCode === Crafty.keys.LA) move.left = true;
        if (e.keyCode === Crafty.keys.UA) move.up = true;
        if (e.keyCode === Crafty.keys.DA) move.down = true;

        this.preventTypeaheadFind(e);
      }).bind('keyup', function(e) {
        // If key is released, stop moving
        if (e.keyCode === Crafty.keys.RA) move.right = false;
        if (e.keyCode === Crafty.keys.LA) move.left = false;
        if (e.keyCode === Crafty.keys.UA) move.up = false;
        if (e.keyCode === Crafty.keys.DA) move.down = false;

        this.preventTypeaheadFind(e);
      });

      return this;
    }
  });

