function createZombies(){
	zombie = Crafty.e("2D, DOM, Zombie");


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

		// Explota con Zombies
		this.onHit("Zombie", function(){
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