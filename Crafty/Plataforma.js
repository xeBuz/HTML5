var HEIGHT = 300
var WIDTH = 400
var level = 1

// Inicia el juego
function start(){
	c = Crafty.init(WIDTH, HEIGHT);
	Crafty.Canvas;
	
	Crafty.sprite(16, "images/example.png", {
    	Kupo: [0,3],
  	});
  	  	     
  	// Scenes lists: Loading, Game	
  	Crafty.scene("loading", function() {
    	Crafty.load(["images/kupo.png"], function() {
      		Crafty.scene("game");
    	});
    
    	// Black background with some loading text
    	Crafty.background("gray");
    	Crafty.e("2D, DOM, Text").attr({w: 100, h: 20, x: 150, y: 120})
      		  .text("Cargando...")
  	});
  	
	Crafty.scene("game", function(){
		// Crea la "cámara/viewport", establece un area visible en el mapa sin importar el tamaño del mismo
		Crafty.viewport.init(HEIGHT, HEIGHT); 
		
		// La setea en el inicio
        Crafty.viewport.x = 0;
        Crafty.viewport.y = 0;
        
        Crafty.e("2D, DOM, Solid, Color, Ground, Collision")
        	  .attr({x: 10, 
			   		 y: 160,
			   		 w: 10,
			   		 h: 12})
			  .color("white");

     	Crafty.e("2D, DOM, Solid, Color, Ground, Collision")
        	  .attr({x: 150, 
			   		 y: 160,
			   		 w: 10,
			   		 h: 12})
			  .color("white");
			  
			  
		CreateLevel(level);
	});
	
	Crafty.scene("loading");
};


// Crea el nivel, modificandolo levemente de acuerdo al parametro que reciba
// * TO DO - Deberia ir agreandole complejidad, analizar esto despues *
function CreateLevel (level) {
	createFloor();
	createPlayer();  
	createRain();
}

// Dibuja el piso. Tiene el tamaño del nivel, es importante para la gravedad del personaje
function createFloor(){
	var size = 5
	
	// Suelo
	Crafty.e("2D, DOM, Color, Ground")
		  .attr({x: 0, 
				 y: HEIGHT - size, 
			     w: WIDTH,
			     h: size})
		  .color("black");
		  
    // Paredes
	Crafty.e("2D, DOM, Color, Ground")
		  .attr({x: WIDTH - size, 
				 y: 0, 
			     w: size,
			     h: HEIGHT})
		  .color("black");
	Crafty.e("2D, DOM, Color, Ground")
		  .attr({x: 0, 
				 y: 0, 
			     w: size,
			     h: HEIGHT})
		  .color("black");

};

function createRain(){
	for (var i=0; i < 3; i++) {
	  var block = Crafty.e("2D, DOM, Block")
	}		
}

// Coloca el jugador en pantalla
function createPlayer(){
	player = Crafty.e("2D, DOM, Player")
};


// Componentes
Crafty.c("Player",{
	_size : 16,
	init: function(){
		  		   this.attr({x: 10, y: 10, z: 1, w: this.size, h: this.size})
		  		   this.requires("Twoway, Gravity, Keyboard, Kupo, SpriteAnimation")
		  		   this.gravity("Ground")
    	       	   this.twoway(2,2)
    	           this.animate("left", 9, 3, 11)


		}
});

Crafty.c("Block",{
	_size : 20,
	_dim : 50, //Crafty.viewport.x
	_grid : this.dim / this.size,
	_pos :  Math.floor(Math.random()* this.dim),
	init: function(){ 
			this.requires("2D, DOM, Solid, Color, Gravity, Collision")
    	  	this.attr({x: this.pos, 
		   	    	   y: 20,
		   		   	   w: this.size,
		   		   	   h: this.size})
		  	this.color("red")
		  	this.gravity("Ground")
		}
});	