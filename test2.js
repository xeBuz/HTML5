// Inicia el juego
function start(){ 
	c = Crafty.init(300, 300);
	Crafty.Canvas;

	Crafty.scene("game", function(){
		Crafty.background("gray");
		
		drawPlayer();

	});
	Crafty.scene("game");
};


function drawPlayer(){
	Crafty.e("2D, DOM, Color, Player, Multiway")
			.color("blue")
			.multiway({x:2,y:1}, {UP_ARROW: -90, DOWN_ARROW: 90, RIGHT_ARROW: 0, LEFT_ARROW: 180});
};

function drawEnemies(){
	
};


Crafty.c("Player",{
	_size : 10,
    _posX : Math.floor(Math.random()* 300),
	_posY : Math.floor(Math.random()* 300),
	
	init: function(){
		this.attr({x: this._posX, 
				   y: this._posY, 
				   w: this._size, 
				   h: this._size})
		this.requires("Color").color("blue");		   
		//this.requires("Circle").circle(0, 0, 10);
		//this.requires("Circle").dcircle.shift(5,5);
		//{x: 5, y: 5, radius: 10};
		//this.requires("Multiway").multiway(1,{UP_ARROW: -90, DOWN_ARROW: 90, RIGHT_ARROW: 0, LEFT_ARROW: 180})
	}
});


Crafty.c("RedEnemy",{
	_size : 5,
    _posX : Math.floor(Math.random()* 300),
	_posY : Math.floor(Math.random()* 300),
	
	init: function(){
		this.attr({x: this._posX, 
				   y: this._posY, 
				   w: this._size, 
				   h: this._size})
		this.requires("Color").color("red");
	}
	
});
