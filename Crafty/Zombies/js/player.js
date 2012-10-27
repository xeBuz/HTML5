Crafty.c("Player",{
	_size : 20,
	_posX : (WIDTH - 20) / 2 ,
	_posY : (HEIGHT - 20) / 2,

	init: function(){
		this.attr({x: this._posX, 
			   	   y: this._posY,
			   	   w: this._size,
			       h: this._size})		
		this.requires("Collision, Solid");
		this.requires("Color").color("Black");
		this.requires("Multiway").multiway({x:1,y:1}, 
										   {W: -90, S: 90, D: 0, A: 180});
				
		this.bind("KeyDown"), function(){
			this.shot(e.keyCode)
		}

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
	},

	shot: function(key){
		//UP_ARROW: -90, DOWN_ARROW: 90, RIGHT_ARROW: 0, LEFT_ARROW: 180, 
		//if (key == Crafty.keys.RA) 
		alert (key);

/*
       if (e.keyCode === ) move.right = true;
        if (e.keyCode === Crafty.keys.LA) move.left = true;
        if (e.keyCode === Crafty.keys.UA) move.up = true;
        if (e.keyCode === Crafty.keys.DA) move.down = true;
*/
	},
});
