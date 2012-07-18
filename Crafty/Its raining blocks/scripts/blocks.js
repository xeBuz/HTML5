

function createBlocks(SPEED, TIME, SIZE){

	// Entra en un loop que va generando los bloques.
	(function(){
	    var block = Crafty.e("2D, DOM, Block")
      	        setTimeout(arguments.callee, TIME);
	})();

};


Crafty.c("Block",{ 
	size    : 20,
	posFrom : 0, 
	posTo   : WIDTH, // This is for a To Do. A movable scene.
	div     : 0,
	
	init: function(){
			this.div = ((this.posTo - this.posFrom) / this.size),
			this.requires("Solid, Color, Collision, Delay"),
    	  		this.attr({x: Math.floor(Math.random() * this.div ) * this.size,  // 30,
		   	    	   y: 0,
		   		   w: this.size,
		   		   h: this.size})  	   
			this.color("black")

			/*
			this.onHit("Block", function(from){
				this.attr({x: from.x, y:from.y})
			});
			*/
  			
  			/*
  			this.bind('EnterFrame', function() {
		    	if(this.hit('Moved')) {
       				this.attr({x: from.x, y:from.y});
       			}   
  			});

			*/
		/*	this.bind('Moved', function(from) {
				if(this.hit('Floor')){
					this.requires("Gravity").gravity("Block")
				}
				if (this.hit('Block')){
					this.requires("Gravity").gravity("Block")
				}
			});
               */

			this.delay(function() {this.drop()}, 500);


		},
   	 	
	drop: function(){
			//this.attr({ this.x: (Math.floor(Math.random()* this.div) * this.size) })
			this.requires("Gravity").gravity("Solid")					
			
	}
});	
