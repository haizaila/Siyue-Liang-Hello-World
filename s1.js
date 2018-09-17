function setup(){
  createCanvas(1700,600);

}

function draw(){
	background(random(0,50));
	for (var i=0; i<10; i++){
		noStroke();
		fill(random(0,180),random(0,60),random(0,250));
		ellipse(random(width),random(height),random(5,30));
	}
}