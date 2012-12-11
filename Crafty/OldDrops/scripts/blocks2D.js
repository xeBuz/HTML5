var SPEED = 0
var TIME = 2000
var SIZE = 40
var GRAVITY = 4


Crafty.c("Block",{ 
	size    : 20,    // From parameters
	posFrom : 0, 
	posTo   : WIDTH, // This is for a To Do. A movable scene.
	 
	init: function(){
			this.requires("Solid, Color, Collision, Delay, Box2D"),
    	  	this.attr({x: Math.floor(Math.random() * (WIDTH-this.size)), 
		   	    	       y: 0 - (this.size / 2),
		   		           w: this.size,
		   		           h: this.size})  	   
    	  	this.color("red")

			this.box2d({
                       bodyType: 'dynamic'
                	  })

		},
   	 	
	drop: function(){
			this.requires("Gravity").gravity("Floor").gravityConst(GRAVITY)								
	},


	/*
	random_color: function(){
	

	}*/
});	


function createBlocks(){
	// Entra en un loop que va generando los bloques.
	(function(){
	    var block = Crafty.e("2D, DOM, Block")
      	        setTimeout(arguments.callee, TIME);
	})();

};