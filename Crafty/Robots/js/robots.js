<<<<<<< HEAD:Crafty/Zombies/js/zombie.js
function createZombies(){

	(function(){
	    var zombie = Crafty.e("2D, DOM, Zombie");
      	        setTimeout(arguments.callee, 1000);
	})();

};


Crafty.c("Zombie",{
	size : 20,

	init: function(){		
		this.attr({x: Math.floor(Math.random() * HEIGHT), 
			   	   y: Math.floor(Math.random() * HEIGHT),
=======
function populateRobots(){
	(function(){
	    // Genera un nuevo zombie, y como el init del componente establece que
	    // la posicion X e Y son aleatorias, aparece en cualquier lado de la pantalla        
	    var robot = Crafty.e("2D, Robot");
	              setTimeout(arguments.callee, 1000);
	})();
};


Crafty.c("Robot",{
	_size : 20,

	init: function(){		
		this.attr({x: Math.floor(Math.random() * HEIGHT), 
                   y: Math.floor(Math.random() * WIDTH),
>>>>>>> 96c5626612fc1f976546b341e86410f9fbe687a4:Crafty/Robots/js/robots.js
			   	   w: this._size,
			       h: this._size})		
		this.requires("DOM, Collision, Solid, Color, MoveTo");
		this.color("Red");
	
		var player = Crafty("Player");


		this.bind("EnterFrame", function () {
			player = Crafty(player[0]);

			if (this.x < player.x)
				this.x++;
			else
				this.x--;

			if (this.y < player.y)
				this.y++;
			else
				this.y--;


		})

<<<<<<< HEAD:Crafty/Zombies/js/zombie.js
=======
		// Explota con Zombies
		this.onHit("Robot", function(){
    			this.destroy();
		})
>>>>>>> 96c5626612fc1f976546b341e86410f9fbe687a4:Crafty/Robots/js/robots.js

		// No traspasa las paredes
		this.bind('Moved', function(from) {
		    if(this.hit('Zombie')) {
       			this.attr({x: from.x, y:from.y});
		   }
		})
	}

});