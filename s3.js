

var img;
var theta = 0;


function setup() {	
	createCanvas(1700,600,WEBGL);
	background(0);
	img = loadImage("../sketch3/assets/suda.jpeg");
    
}


function draw(){
	translate(800,300);
	push();
    rotateZ(theta * 0.1);
    rotateX(theta * 0.1);
    rotateY(theta * 0.1);
    texture(img);
    box(100, 100, 100);
    pop();
    theta += 0.05;
}
