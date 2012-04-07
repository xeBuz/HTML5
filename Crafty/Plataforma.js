var HEIGHT = 200
var WIDTH = 5000
var level = 1

// Inicia el juego
function start(){
	c = Crafty.init(WIDTH, HEIGHT);
	Crafty.Canvas;
	
	Crafty.sprite(16, "images/example.png", {
    	Kupo: [0,3],
  	});
  	  	     
  	// Scenes lists: Loading, Game	
  	Crafty.scene("loading", function() {
    	Crafty.load(["kupo.png"], function() {
      		Crafty.scene("game");
    	});
    
    	// Black background with some loading text
    	Crafty.background("gray");
    	Crafty.e("2D, DOM, Text").attr({w: 100, h: 20, x: 150, y: 120})
      		  .text("Cargando...")
  	});
  	
	Crafty.scene("game", function(){
        //Crafty.viewport.x = 100;
        //Crafty.viewport.y = 100;
        Crafty.e("2D, DOM, Solid, Color, Ground, Collision")
        	  .attr({x: 10, 
			   		 y: 160,
			   		 w: 10,
			   		 h: 12})
			  .color("white");

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
	
	// Suelo
	Crafty.e("2D, DOM, Color, Ground")
		  .attr({x: 0, 
				 y: HEIGHT - size, 
			     w: WIDTH,
			     h: size})
		  .color("black");
		  
    // Paredes
	Crafty.e("2D, DOM, Color, Ground")
		  .attr({x: WIDTH - size, 
				 y: 0, 
			     w: size,
			     h: HEIGHT})
		  .color("black");

};


// Creacion del Jugador
// Lo realiza sólo una vez
function createPlayer(){
	size = 16;
	Crafty.e("2D, DOM, Twoway, Gravity, Keyboard, Kupo, SpriteAnimation") 
		  .attr({x: 10,	y: 10, z: 1, w: size, h: size})
		  //.color("white")	
		  .gravity("Ground")
    	  .twoway(3,4)
    	  .animate("nada", 9, 3, 11)
          
          .bind("enterframe", function() {
              if (!this.isPlaying())
                this.animate("nada", 80);
            });
          
          
		  //.CustomControls(1)
		  /*.animate("left", 5, 1, 8)
		  
		  .animate("jump", 1, 1, 4)
		  .bind("enterframe", function(e) {
    	  		if (this.__move.left) {
      				if (!this.isPlaying("left"))
        				this.stop().animate("left", 10);
    				}
    			if (this.__move.right) {
      				if (!this.isPlaying("right"))
        				this.stop().animate("right", 10);
    				}
    			if (this.__move.up) {
      				if (!this.isPlaying("jump"))
        				this.stop().animate("jump", 10);
    				}
    			if (this.__move.down) {
      				if (!this.isPlaying("down"))
        				this.stop().animate("down", 10);
    				}
  		  }).bind("keyup", function(e) {
    			this.stop();
  		  });
*/
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
  
Crafty.c("TrackView", {
		_buffer: 64,
		_target: {x: 0, y:0},
		init: function(){
			this._target.x = Crafty.viewport.x;
			this._target.y = Crafty.viewport.y;
			this.bind("enterframe",function(){
				screenx = (this.x + (this._w / 2)) + Crafty.viewport.x;
				screeny = (this.y + (this._h / 2)) + Crafty.viewport.y;
				if (screenx < this._buffer){
					Crafty.viewport.x += this._speed;
				} else if (screenx > (Crafty.viewport.width - this._buffer)) {
					Crafty.viewport.x -= this._speed;
				}
				if (screeny < this._buffer){
					Crafty.viewport.y += this._speed;
				} else if (screeny > (Crafty.viewport.height - this._buffer)) {
					Crafty.viewport.y -= this._speed;
				}
			});
		},	
	  });
	  Crafty.c("View", {
		init: function(){
			this.addComponent("2D");
			this.addComponent("Canvas");
			this._tx = 0;
			this._ty = 0;
			if(Crafty.support.setter) {
				this.__defineSetter__('tx', function(v) { this._set_tx(v); });
				this.__defineGetter__('tx', function() { return this._tx; });
				this.__defineSetter__('ty', function(v) { this._set_ty(v); });
				this.__defineGetter__('ty', function() { return this._ty; });
			}
		},
		_set_tx: function(v){
			this._tx = v;
			this.x = (this._tx + (Crafty.viewport.width/2)) - (this._w / 2);
		},
		_set_ty: function(v){
			this._ty = v;
			this.y = ((-this._ty + (Crafty.viewport.height/2))) - (this._h / 2);
		},
		t: function(x, y){
			if (typeof x === "object"){
				y = x.y;
				x = x.x;
			}
			this.tx = x;
			this.ty = y;
			return this;
		},
	  })  

