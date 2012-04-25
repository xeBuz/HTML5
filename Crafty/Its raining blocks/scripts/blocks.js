

function createBlocks(SPEED, TIME, SIZE){

	/*Crafty.e().bind("enterframe", function(e) {
		var sparsity = Crafty.randRange(10, 50);
		if(e.frame % sparsity == 0) {
			Crafty.e("2D, DOM, fruit, Gravity, Mouse").gravity("floor");
		}
	});*/
	

  	for (i=1;i<=5;i++){
		var block = Crafty.e("2D, DOM, Block")
	} 
};




Crafty.c("Block",{ 
	size    : 20,
	posFrom : 0, 
	posTo   : WIDTH, // This is for a To Do. A movable scene.
	div     : 0,
	//pos     : 30, 	
	
	init: function(){
		    this.div = ((this.posTo - this.posFrom) / this.size),
    	  	this.attr({x: Math.floor(Math.random() * this.div ) * this.size,  // 30,
		   	    	   y: 0,
		   		   	   w: this.size,
		   		   	   h: this.size})
			this.requires("Solid, Color, Collision")		   		   	   
			//this.color("#585858")
			this.color("black")
			this.delay (function() {this.drop()}, 500);
		},
		
	drop: function(){
			//this.attr({ this.x: (Math.floor(Math.random()* this.div) * this.size) })
			this.requires("Gravity").gravity("Floor")
								
	}
});	
