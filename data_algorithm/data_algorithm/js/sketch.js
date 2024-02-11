

var CANVASWIDTH = window.innerWidth;
var CANVASHEIGHT = window.innerHeight;


const TREEX = CANVASWIDTH / 2;     
const TREEY = 100;                 
const BACKGROUNDCOLOR = color(50); 

function setup() {
   
    var canvas = createCanvas(CANVASWIDTH, CANVASHEIGHT);
    canvas.parent('canvas-placeholder');

    
    var tree = new Tree(TREEX, TREEY, BACKGROUNDCOLOR);
    var explorer = new Explorer(canvas.canvas, tree.graphicsBuffer, tree.draw.bind(tree));
    var controls = new Controls(tree)
}
