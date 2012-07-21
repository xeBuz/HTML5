HEIGHT = 800
WIDTH = 500

// Inicia el juego
function start(){
	c = Crafty.init(HEIGHT, WIDTH);
	Crafty.Canvas;

	Crafty.scene("game", function(){
		Crafty.background("#4695E3");
	
		floor = Crafty.e("2D, DOM, Floor")
	  
	    pulpo = Crafty.e("2D, DOM, Pulpo")
		
		});

	Crafty.scene("game");
};


Crafty.c("Pulpo",{
	_size : 35,
	_posX : Math.floor(Math.random()* HEIGHT),
	_posY : Math.floor(Math.random()* WIDTH),
	
	init: function(){
		this.attr({x: this._posX, 
			   y: this._posY,
			   w: this._size,
			   h: this._size})
		this.requires("Color").color("Black");
		this.requires("Fourway, Keyboard, Collision, Solid");
		this.fourway(2)
		this.requires("Gravity").gravity("Solid").gravityConst(0.01)

		

	}
});

Crafty.c("Floor",{
	_size : 50,
	init: function(){ 
			this.requires("Solid, Color, Collision")
			this.color("Black")
			this.attr({x: 0, 
				 	   y: 400,//HEIGHT - this._size, 
			           w: 600,//WIDTH,
			           h: 20})//this._size})
	}
});