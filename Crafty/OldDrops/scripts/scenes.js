
Crafty.scene("LoadResources", function() {
   	// Black background with some loading text
	//Crafty.background("Black");
	Crafty.e("2D, DOM, Text").attr({w: 100, h: 20, x: 150, y: 120})
  		  .text("Cargando...")

	// Set a Wallpaper
	var bg = Crafty.e("2D, DOM, Image")
                   .attr({w: WIDTH, h: HEIGHT})
          		   .image("media/images/random_grey.png", "repeat");
	Crafty.background('url(media/images/random_grey.png)');
       
    Crafty.scene("Menu");
});
  	

Crafty.scene("Menu", function(){
	
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


