Crafty.c("MainPlayer",{
	_size : 20,
	_life : 100,
	_speed: 3,
	_jump: 3.3,
	init: function(){
  		   this.attr({x: 10, y: 10, z: 1, w: this.size, h: this.size})
  		   this.requires("Twoway, Gravity, Keyboard, Collision, Solid")
  		   this.gravity("Floor")
  		   this.twoway(this.speed,this.jump)
   
		   this.bind('Moved', function(from) {
		   		if(this.hit('Block')) {
		       		this.attr({x: from.x, y:from.y});
		       	}
		   })
	}
});
 
Crafty.c("TestPlayer",{
	size    : 20,

	init: function(){
			this.requires("Color, Collision, Solid,  Gravity, Twoway, Box2D"),
    	  		this.attr({x: 30,  // 30,
		   	    	   y: 30,
		   		   w: this.size,
		   		   h: this.size})  	   
			this.color("red")
			this.gravity("Floor")
			this.twoway(3,3)
			
			//this.box2d({
             //           bodyType: 'dynamic'
             //    	  })
		        
		   //this.bind('Moved', function(from) {
		   //		if(this.hit('Block')) {
		   //    		this.attr({x: from.x, y:from.y});
		   //    	}
		   //})
			
	}
		
});


function createPlayer(){
	player = Crafty.e("2D, DOM, TestPlayer")	
};


// Ejemplo sacado de la web
Crafty.c('Controls',{
	_move:  {left: false, right: false, up: false, down: false}, 
	_speed: 3,
	_wasd : false,

	Controls: function(speed){
	   	if (speed) this._speed = speed;
		var move = this._move;

		this.bind('enterframe', function(){
			if (move.right) this.x += this._speed; else 
			if (move.left) this.x -= this._speed; else 
			if (move.up) this.y -= this._speed; else 
			if (move.down) this.y += this._speed; 		
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
})

