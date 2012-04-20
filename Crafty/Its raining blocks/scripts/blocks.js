

function createBlocks(SPEED, TIME, SIZE){
	
	 var block = Crafty.e("2D, DOM, Block, Floor ")
	 block.drop()
};




Crafty.c("Block",{
	size    : 20,
	posFrom : 0, 
	posTo   : HEIGHT, // This is for a To Do. A movable scene.
	div     : 0,
	//pos     : 30, 	
	
	init: function(){
		    this.div = (this.dim / this.size);
    	  	this.attr({x: 30, //,
		   	    	   y: 0,
		   		   	   w: this.size,
		   		   	   h: this.size})
			this.requires("Solid, Color, Collision")		   		   	   
			this.color("#585858")
		},
		
	drop: function(){
			//this.attr({ this.x: (Math.floor(Math.random()* this.div) * this.size) })
			this.requires("Gravity").gravity("Floor")				
	}
});	
