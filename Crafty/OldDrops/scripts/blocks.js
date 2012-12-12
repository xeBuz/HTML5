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
		this.color(random_color())
		this.delay(function() {this.drop()}, 200);

		this.onHit("Floor", function() {
			this.destroy();
		});
	},

	drop: function(){
		//this.attr({ this.x: (Math.floor(Math.random()* this.div) * this.size) })
		this.requires("Gravity").gravity("Floor").gravityConst(BLOCK_GRAVITY)	

	},

	/*
	random_color: function(){


	}*/
});	


function createBlocks(){
	// Entra en un loop que va generando los bloques.
	(function(){
	    var block = Crafty.e("2D, DOM, Block")
      	        setTimeout(arguments.callee, BLOCK_TIME);
      	if (BLOCK_TIME > 200) 
      		{
      			BLOCK_TIME--;
      		}
	})();

};