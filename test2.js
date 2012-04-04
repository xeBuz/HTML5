// Inicia el juego
function start(){ 
	c = Crafty.init(300, 300);
	Crafty.Canvas;

	Crafty.scene("game", function(){
		Crafty.background("gray");
		
		Crafty.e("2D, DOM, Color, Player, Multiway")
			.color("red")
			.multiway({x:2,y:1}, {UP_ARROW: -90, DOWN_ARROW: 90, RIGHT_ARROW: 0, LEFT_ARROW: 180});

	});
	Crafty.scene("game");
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
				   
		this.requires("Multiway").multiway(1,{UP_ARROW: -90, DOWN_ARROW: 90, RIGHT_ARROW: 0, LEFT_ARROW: 180})
		/*
		this.bind('KeyDown', function(e) {
		if(e.key == Crafty.keys['LEFT_ARROW']) {
			this.x=this.x-1;} 
		else if (e.key == Crafty.keys['RIGHT_ARROW']) {
			this.x=this.x+1;} 
		else if (e.key == Crafty.keys['UP_ARROW']) {
			this.y=this.y-1;} 
		else if (e.key == Crafty.keys['DOWN_ARROW']) {
			this.y=this.y+1;}
		});
		*/
	}
});





