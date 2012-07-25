// Create Floor, used by Gravity of the other objects
function createFloor(){	
	var size = 1

	Crafty.c("Floor",{
	init: function(){ 
			this.requires("Solid, Color, Collision")
			this.color("Black")
			
		}
	});	
	
	// Create the Floor
	Crafty.e("2D, DOM, Floor")
		  .attr({x: 0, 
				 y: HEIGHT - size, 
			     w: WIDTH,
			     h: size});

};
