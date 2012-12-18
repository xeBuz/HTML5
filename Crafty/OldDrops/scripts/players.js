function createPlayers(){
	playerLeft = Crafty.e("Player, LeftPlayer").collision([0,0],[this._size,0],[this._size,this._size],[0,this._size])
	playerRight = Crafty.e("Player, RightPlayer").collision([0,0],[this._size,0],[this._size,this._size],[0,this._size])

};

Crafty.c("Player",{
	_size : PLAYER_SIZE,
	_life : PLAYER_LIFE,
	_speed : PLAYER_SPEED,

	init: function(){
		this.requires("2D, DOM, Solid, Color, Multiway, Delay, Collision")

		// Border CSS
		this.css("-webkit-border-radius", "3px");
		this.css("-moz-border-radius", "3px");
		this.css("border-radius", "3px");	

		this.css("border-style", "solid");	
		this.css("border-width", "1px");	
		this.css("border-color", "000000");	


		this.onHit('Block', function(e){
			console.log(e)
			if (e[0].obj.color() != this.color()) {
				setScore(-5)
				this.hit(10)
			}
			else {
				setScore(10)
			}
			e[0].obj.crash()
		});


		this.bind('Moved', function(from) {
    		if(this.hit('Player')) {
       			this.attr({x: from.x, y:from.y});
    		}

    		if((this.x + this.w) > WIDTH || this.x < 0 || (this.y + this.h) > HEIGHT || this.y < 0) {
    				this.attr({x: from.x, y:from.y});
    		}
		});	
	},

	speed_slow: function(){	
		// Divide in 2 the speed and restore after 3 seconds
		this._speed = Math.floor(this._speed/2)
		this.delay(function() {this.speed_normal()}, 3000);
	},

	speed_normal: function (){
		// Restore the speed
		this._speed = PLAYER_SPEED
	},

	hit: function (damage){
		// Hurt Function
		this._life =  this._life - damage
		if (this._life < 1) {
			this.die();
		};

	},
	
	health: function (healing){
		// Health function
		this._life = this._life + healing;

		if (this._life > LIFE){
			this._life = LIFE
		}
	},

	die: function(){
		// TODO
		Crafty.scene("GameOver");
	}

});	


Crafty.c("RightPlayer",{
	init: function(){
		this.attr({x: 120,  // 30,
		   	   	   y: 250,
		   	   	   w: this._size,
		   	       h: this._size})  
	    this.requires("Player")
		this.color(color_right)
		this.multiway(PLAYER_SPEED, { W: -90, A: 180, D: 0, S: 90 });						

		this.bind("KeyDown", function(e) {
	    	if (e.keyCode === Crafty.keys.SPACE) {
	    		console.log("Change Positions")
	    		temp_x = playerLeft.x; 
	    		temp_y = playerLeft.y;

	    		playerLeft.attr({x: playerRight.x,  y: playerRight.y});
	    		playerRight.attr({x: temp_x,  y: temp_y});
	    	}
	    });	
	},
});	

Crafty.c("LeftPlayer",{
	init: function(){
		this.attr({x: 260,  // 30,
   	               y: 250,
   		           w: this._size,
   		   	   	   h: this._size})  
		this.requires("Player")
		this.color(color_left)	
		this.multiway(PLAYER_SPEED, {UP_ARROW: -90, RIGHT_ARROW: 0, LEFT_ARROW: 180, DOWN_ARROW: 90 });
	}
});	
