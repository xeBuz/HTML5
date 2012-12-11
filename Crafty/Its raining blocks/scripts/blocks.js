

function createBlocks(SPEED, TIME, SIZE){

	// Entra en un loop que va generando los bloques.
	(function(){
	    var block = Crafty.e("Block")
      	        setTimeout(arguments.callee, TIME);
	})(); 
 
};


Crafty.c("Block",{ 
	size    : 20,    // From parameters
	posFrom : 0, 
	posTo   : WIDTH, // This is for a To Do. A movable scene.
	div     : 0,
	
	init: function(){
			//this.div = ((this.posTo - this.posFrom) / this.size),
			this.requires("2D, DOM, Solid, Color, Collision, Delay, Box2D"),
    	  		this.attr({x: Math.floor(Math.random() * (this.posTo - this.posFrom)), //Math.floor(Math.random() * this.div ) * this.size,  // 30,
		   	    	       y: 0,
		   		   		   w: this.size,
		   		           h: this.size})  	   
			this.color("black")

			this.box2d({
                       bodyType: 'dynamic'
                	  })

			// Second parameter MUST be a level-parameter
			this.delay(function() {this.drop()}, 500);


		},
   	 	
	drop: function(){
			//this.attr({ this.x: (Math.floor(Math.random()* this.div) * this.size) })
			this.requires("Gravity").gravity("Solid")					
			
	}
});	
