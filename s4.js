
function setup() {
  createCanvas(1700,600); 
  //noStroke();
  frameRate(10);
  smooth();
}

function draw() {
  if (mouseX > 500){
  	background(255, 204, 0);
  } 
  else{
  	background(211, 84, 0);
  }
  

  for (var y = 0; y < 500; y++) {
  var x = randomGaussian(600, 300);
  fill(0,0,0);
  line(500, y, x, y);
}
	

  }

