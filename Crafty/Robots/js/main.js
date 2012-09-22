var WIDTH = 800
var HEIGHT = 500


window.onload = function() {
	Crafty.init(WIDTH, HEIGHT, 30);
	Crafty.canvas.init();

	// Crear Player
	player = Crafty.e("2D, DOM, Player")


	populateRobots();
};


