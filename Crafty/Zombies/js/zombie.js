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


		// No traspasa las paredes
		this.bind('Moved', function(from) {
		    if(this.hit('Zombie')) {
       			this.attr({x: from.x, y:from.y});
		   }
		})
	}

});