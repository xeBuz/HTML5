var HEIGHT = 600
var WIDTH = 400

var BAR_SIZE = 15
var FLOOR_SIZE = 1

var PLAYER_SPEED = 100
var PLAYER_LIFE = 100
var PLAYER_SIZE = 35 

var BLOCK_TIME = 1500
var BLOCK_SIZE = 40
var BLOCK_GRAVITY = 0.1

var level = 1

var color_right = "Red"
var color_left = "Blue"

var colors = ["Red", "Blue", "Green", "Yellow", "Grey", "White", "Purple"]

// Inicia el juego
function start(){
	Crafty.init(WIDTH, HEIGHT);
	Crafty.Canvas;
		
	Crafty.scene("LoadResources");

};


function random_color(){
	return colors[Math.floor(Math.random() * colors.length)];	
}



