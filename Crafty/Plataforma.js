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
	Crafty.e("2D, DOM, Ground")
		  .attr({x: 0, 
				 y: HEIGHT - size, 
			     w: WIDTH,
			     h: size});
		  
    // Paredes
	Crafty.e("2D, DOM, Ground")
		  .attr({x: WIDTH - size, 
				 y: 0, 
			     w: size,
			     h: HEIGHT});

	Crafty.e("2D, DOM, Ground")
		  .attr({x: 0, 
				 y: 0, 
			     w: size,
			     h: HEIGHT});

};

function createRain(){
	//for (i=1;i<=5;i++){
	  var block = Crafty.e("2D, DOM, Block, Falling, Ground")
	//}		
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
		  		   this.requires("Twoway, Gravity, Keyboard, Kupo, SpriteAnimation, Collision")
		  		   this.gravity("Ground")
    	       	   this.twoway(3,4)
    	       	   // No traspasa los Enemigos Negros
				   /*
				    
				    this.bind('Moved', function(from) {
					    if( this.Hit('Block') ) {
       						this.attr({x: from.x, y:from.y})
		   				}
		   				
		   			})*/
		  }
		    
});

Crafty.c("Ground",{
	init: function(){ 
			this.requires("Solid, Color, Collision")
			this.color("black")
	}
});	

Crafty.c("Block",{
	size : 20,
	
	/*
	posFrom : 0, // Este valor los debe sacar del viewport
	posTo: HEIGHT, // Este valor los debe sacar del viewport
	dim: 300, //(this.posTo - this.posFrom),
	div: (300 / 20), //this.dim / this.size,
	pos: 30, //(Math.floor(Math.random()* this.div) * this.size) 	
	*/
	
	init: function(){ 
			this.requires("Solid, Color, Collision")
    	  	this.attr({x: 40, //this.pos 
		   	    	   y: 20,
		   		   	   w: this.size,
		   		   	   h: this.size})
		   	/*	   	   
			this.onHit("Ground", function(){
				this.requires("Ground")
				this.color("black")			
			})
			*/	    				
	    				
		}
});	

Crafty.c("Falling",{
	init: function(){
		this.requires("Gravity").gravity("Ground")
		this.color("#585858")
		
		this.onHit("Ground", function(){
			this.color("red")
			//this.requires("OnGround")
		})	
	}
	
});

Crafty.c("OnGround", {
	init: function(){
		this.color("black")
		this.removeComponent("Gravity")
		this.requires("Ground")
	
	}	
	
/*function Choque(){
		
	}*/
});
