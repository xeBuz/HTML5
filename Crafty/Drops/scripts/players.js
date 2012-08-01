// Default vars
SPEED = 4
JUMP = 2
LIFE = 100
SIZE = 30

function createPlayers(){
	pBlue = Crafty.e("2D, DOM, Player, LeftPlayer").collision([0,0],[this._size,0],[this._size,this._size],[0,this._size])
	pRed = Crafty.e("2D, DOM, Player, RightPlayer").collision([0,0],[this._size,0],[this._size,this._size],[0,this._size])

};

Crafty.c("Player",{
	_size : SIZE,
	_life : LIFE,
	_speed : SPEED,
	_jump : JUMP,

	init: function(){
		this.requires("2D, DOM, Solid, Color, Collision, SolidHitBox, Gravity, Twoway, Delay")
		this.gravity("Floor").gravityConst(0.085)	
		
		// Border Radius CSS
		this.css("-webkit-border-radius", "5px");
		this.css("-moz-border-radius", "5px");
		this.css("border-radius", "5px");	

		this.css("border-style", "solid");	
		this.css("border-width", "1px");	
		this.css("border-color", "000000");	

		this.bind('EnterFrame', function(from) {
		    if(this.hit('Player')) {
       			this.attr({x: from.x, y:from.y});
		   }
		})	
		
	},

	speed_slow: function(){	
		// Divide in 2 the speed and restore after 3 seconds
		this._speed = Math.floor(this._speed/2)
		this.delay(function() {this.speed_normal()}, 3000);
	},

	speed_normal: function (){
		// Restore the speed
		this._speed = SPEED
	},

	hurt: function (damage){
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
		this.attr({x: 30,  // 30,
		   	       y: 30,
		   		   w: this._size,
		   		   h: this._size})  
		this.color(color_right)
		this.multiway(this._speed, { W: -90, A: 180, D: 0 });						
		
	},
});	

Crafty.c("LeftPlayer",{
	init: function(){
		this.attr({x: 100,  // 30,
   	       y: 100,
   		   w: this._size,
   		   h: this._size})  
		this.color(color_left)	
		this.multiway(this._speed, {UP_ARROW: -90, RIGHT_ARROW: 0, LEFT_ARROW: 180 });
	}
});	
