var SPEED = 0
var TIME = 100
var SIZE = 40
var GRAVITY = 0.01


Crafty.c("Block",{ 
	size    : 20,    // From parameters
	posFrom : 0, 
	posTo   : WIDTH, // This is for a To Do. A movable scene.
	
	init: function(){
			this.requires("Solid, Color, Collision, Delay"),
    	  		this.attr({x: Math.floor(Math.random() * (WIDTH-this.size)), 
		   	    	       y: 0 - (this.size / 2),
		   		           w: this.size,
		   		           h: this.size})  	   
			//this.random_color()
			// Second parameter MUST be a level-parameter
			this.delay(function() {this.drop()}, 700);


		},
   	 	
	drop: function(){
			//this.attr({ this.x: (Math.floor(Math.random()* this.div) * this.size) })
			this.requires("Gravity").gravity("Floor").gravityConst(GRAVITY)						
			
	},

	/*
	random_color: function(){
	

	}*/
});	


//function createBlocks(SPEED, TIME, SIZE){
function createBlocks(){
	// Entra en un loop que va generando los bloques.
	(function(){
	    var block = Crafty.e("2D, DOM, Block")
      	        setTimeout(arguments.callee, TIME);
	})();

};