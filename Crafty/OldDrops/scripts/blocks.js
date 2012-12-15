Crafty.c("Block",{ 
	size    : 20,    
	posFrom : 0, 
	posTo   : WIDTH,
	 
	init: function(){
		this.requires("Solid, Color, Collision, Delay"),
		this.attr({x: Math.floor(Math.random() * (WIDTH-this.size)),
				   y: 0 - (this.size / 2),
				   w: this.size,
				   h: this.size})
		this.color(random_color())
		this.delay(function() {this.drop()}, 200);

		console.log("New cube " + this.color() ) ;

		this.onHit("Floor", function() {
			this.crash();
		});
	},

	drop: function(){
		this.requires("Gravity").gravity("Floor").gravityConst(BLOCK_GRAVITY);
		setScore(1);
	},

	crash: function(){
		//console.log("Crash cube "+ this.color())
		this.destroy();

	}
});	


function createBlocks(){
	(function(){
	    var block = Crafty.e("2D, DOM, Block")
      	        setTimeout(arguments.callee, BLOCK_TIME);
      	if (BLOCK_TIME > 200) 
      		{
      			BLOCK_TIME--;
      		}
	})();
};