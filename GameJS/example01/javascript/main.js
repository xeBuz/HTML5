var gamejs = require('gamejs');

var SCREEN_WIDTH = 400;
var SCREEN_HEIGHT = 400;


function main() {
    var display = gamejs.display.setMode([SCREEN_WIDTH, SCREEN_HEIGHT]);
    var screen = gamejs.display.getSurface();
};
