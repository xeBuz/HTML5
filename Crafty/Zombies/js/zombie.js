function createZombies(){


};

Crafty.c("Zombie",{
	_size : 20,
	_posX : Math.floor(Math.random()* HEIGHT),
	_posY : 1,


	init: function(){		
		this.attr({x: this._posX, 
			   	   y: this._posY,
			   	   w: this._size,
			       h: this._size})		
		this.requires("Collision, Solid, Color, MoveTo");
		this.color("Red");

		// Explota con Zombies
		this.onHit("Zombies", function(){
    			this.destroy();
		})

		// No traspasa las paredes
		this.bind('Moved', function(from) {
		    if(this.hit('Wall')) {
       			this.attr({x: from.x, y:from.y});
		   }
		})
	}
});