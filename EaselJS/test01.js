var stage;
var canvasWidth;
var canvasHeight;


function init() {
    
	var canvas = document.getElementById('canvasStage');

	canvasWidth = document.getElementById('canvasStage').width;
	canvasHeight = document.getElementById('canvasStage').height;
    
    stage = new createjs.Stage(canvas);
    
	stage.update();
    
    // createjs.Ticker.addListener(this); // needed if animating
}

// needed if animating
function tick() {
    stage.update();
}