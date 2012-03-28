HEIGHT = 1024
WIDTH = 600
COUNT = 3

// Inicia el juego
function start(){
	initGlobalVars();
    initGame();    
};

function initGlobalVars(){
	//automatically play the loading scene
	Crafty.init(HEIGHT, WIDTH);
	Crafty.canvas.init();   
};

function initGame(){
	Crafty.scene("main", function () {
	for (i=1;i<=COUNT;i++){
		generateSquare();
		}	
    });
	Crafty.scene("main");
};

// Genera un cuadrado en un lugar random
function generateSquare(){
	var dW = 10 
	var dH = 10
    var posX = Math.floor(Math.random()*HEIGHT) - (dH/2)
	var posY  =Math.floor(Math.random()*WIDTH) - (dW/2)
	
	var sqr = Crafty.e("2D, DOM, Color, MoveTo")
          .attr({x: posX, y: posY, w: dW, h: dH})
          .color("red");	 	
}

// Sacado de CraftyComponents.com
Crafty.modules({MoveTo: "RELEASE"}, function(){
    Crafty.e("2D, DOM, Color, MoveTo")
});
