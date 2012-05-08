Crafty.c("MainPlayer",{
	_size : 25,
	init: function(){
		  		   this.attr({x: 10, y: 10, z: 1, w: this.size, h: this.size})
		  		   this.requires("Twoway, Gravity, Keyboard, PlayerSprite, SpriteAnimation, Collision")
		  		   this.gravity("Floor")
    	       	   this.twoway(3,3.3)
		  }
		    
});



function createPlayer(){
	player = Crafty.e("2D, DOM, MainPlayer")	
}



// Ejemplo sacado de la web
// Lo dejo aca pero no lo uso
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