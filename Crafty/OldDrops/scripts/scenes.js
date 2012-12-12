
Crafty.scene("LoadResources", function() {
   	// Black background with some loading text
	Crafty.background("Black");
	Crafty.e("2D, DOM, Text").attr({w: 100, h: 20, x: 150, y: 120})
  		  .text("Cargando...")
       
    Crafty.scene("Menu");
});
  	

Crafty.scene("Menu", function(){
	
	// Set a Wallpaper
	Crafty.e("2D, DOM, Image")
          .attr({w: Crafty.viewport.width, h: Crafty.viewport.height})
          .image("images/wall.jpg", "repeat");
    
	Crafty.scene("Game");
});


Crafty.scene("Game", function(){
  
  	createDisplay()
	createFloor();	
	createPlayers();  
	createBlocks();


	function ChangeColor(){
		do {
			temp_color =  colors[Math.floor(Math.random()*colors.length)]
		}
		while ((temp_color != color_left) && (temp_color != color_right));
		
	}	
});


Crafty.scene("Pause", function(){

	
});


Crafty.scene("GameOver", function(){
	
});


