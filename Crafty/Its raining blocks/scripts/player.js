Crafty.c("MainPlayer",{
	_size : 25,
	init: function(){
		  		   this.attr({x: 10, y: 10, z: 1, w: this.size, h: this.size})
		  		   this.requires("Twoway, Gravity, Keyboard, PlayerSprite, SpriteAnimation, Collision")
		  		   this.gravity("Floor")
    	       	   this.twoway(3,4)
		  }
		    
});



function createPlayer(){
	player = Crafty.e("2D, DOM, MainPlayer")	
}

