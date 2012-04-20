

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



function createPlayer(){
	player = Crafty.e("2D, DOM, Player")	
}

