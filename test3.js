var stage;
var player;

function start(){
	stage = new Stage(document.getElementById("canvas"));
	Ticker.setFPS(60);
	drawPlayer();
};


function drawPlayer(){
	player = new Graphics();
	player.beginStroke(Graphics.getRGB(0,0,0));
	player.beginFill(Graphics.getRGB(255,0,0));
	player.drawCircle(0,0,3);
	stage.addChild(player);
	stage.update();
	
};


function drawEnemies(){
	
};
