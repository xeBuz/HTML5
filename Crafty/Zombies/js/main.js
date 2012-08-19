var WIDTH = 600
var HEIGHT = 300


window.onload = function() {
	Crafty.init(WIDTH, HEIGHT, 30);
	Crafty.canvas.init();

	// Crear Player
	var player = Crafty.e("2D, DOM, Player")


	createZombies(player);
};


