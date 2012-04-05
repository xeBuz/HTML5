HEIGHT = 500
WIDTH = 500

// Inicia el juego
function start(){
	c = Crafty.init(HEIGHT, WIDTH);
	Crafty.Canvas;

	Crafty.scene("game", function(){
		Crafty.background("gray");
	
		var triangle = new Crafty.polygon([50,0],[100,100],[0,100]);
		// Pone el jugador en pantalla
		//drawPlayer();

		var circle = new Crafty.circle(0, 0, 10);
		circle.containsPoint(0, 0); 
		
		Crafty.e("2D, DOM, Color, Multiway, Collision, Polygon")
		  .polygon([50,0],[100,100],[0,100])
          .attr({x:200, y:200, w:50, h:50})
          .color("red")
          .multiway(1, {UP_ARROW: -90, DOWN_ARROW: 90, RIGHT_ARROW: 0, LEFT_ARROW: 180})
          .collision(new Crafty.polygon([50,0],[100,100],[0,100]))
     		
		});

	Crafty.scene("game");
};


function drawPlayer(){
	// El multiway con las teclas no lo puedo definir en el componente Player
	// ...tengo que ver como se hace
	Crafty.e("2D, DOM, Player")
	      .multiway({x:1,y:1}, {UP_ARROW: -90, DOWN_ARROW: 90, RIGHT_ARROW: 0, LEFT_ARROW: 180, 
		                    W: -90, S: 90, D: 0, A: 180});
	// Este multiway viene integrado con Crafty, se puede suplantar con 
	// .bind("enterframe", function(mov){ y definir cada tecla en la funcion }
	
};


Crafty.c("Player",{
	_size : 15,
	_posX : Math.floor(Math.random()* HEIGHT),
	_posY : Math.floor(Math.random()* WIDTH),

	init: function(){
		this.attr({x: this._posX, 
			   y: this._posY,
			   w: this._size,
			   h: this._size})
		this.requires("Color").color("white");
		this.requires("Multiway, Collision, Solid");
		
		// Explota con Enemigos Rojos
		this.onHit("RedEnemy", function(){
    			this.destroy();
		})

		// No traspasa los Enemigos Negros
		this.bind('Moved', function(from) {
		    if(this.hit('BlackEnemy')) {
       			this.attr({x: from.x, y:from.y});
		   }
		})
	}
});

