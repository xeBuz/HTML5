
// Create Floor, used by Gravity of the other objects
function createFloor(){	
	// Create the Floor
	var Floor = Crafty.e("2D, DOM, Floor, Solid, Color, Collision")
					  .attr({x: 0, 
					   		 y: HEIGHT - BAR_SIZE - FLOOR_SIZE , 
			     	   		 w: WIDTH,
				       		 h: FLOOR_SIZE})
					  .color("Black")		
};

function createDisplay(){
	Crafty.e("2D, DOM, Solid, Color").color("Black")
			.attr({x: WIDTH / 2, 
			       y: HEIGHT - BAR_SIZE, 
			       w: FLOOR_SIZE,
			       h: BAR_SIZE});
	// Create Bars
	var bar_left = Crafty.e("LeftBar")
	var bar_right = Crafty.e("RightBar")
}

Crafty.c("Bar",{

	init: function(){
		this.requires("2D, DOM, Solid, Color, Floor")
		this.attr({alpha : 0.9})
	},
});

Crafty.c("LeftBar",{
	init: function(){
		this.requires("Bar")
		this.color(color_left)
		this.attr({x: WIDTH / 2,
				   y: HEIGHT - BAR_SIZE,
				   w: (WIDTH / 2) ,
				   h: BAR_SIZE})
	}
});


Crafty.c("RightBar",{
	init: function(){
		this.requires("Bar")
		this.color(color_right)
		this.attr({x: 0,
				   y: HEIGHT - BAR_SIZE,
				   w: (WIDTH / 2) ,
				   h: BAR_SIZE})
	}
});