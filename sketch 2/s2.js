 

 //
 //2

 
function setup(){
	createCanvas(1700,600);
	frameRate(20);	
	
}


function draw(){
	//background(random(100),random(0),random(200));
  
	textSize(300);
	textStyle(BOLD);
	fill(random(100),random(0),random(200));
	text("LOVE", 400,400);

	if (mouseIsPressed){
		translate(mouseX,mouseY)
		rotate(frameCount);
		textSize(50);
		fill(230, 218, 255);
		text("LOVE", random(10),0);
		
	}else{
		textSize(50);
		fill(166, 190, 255);
		text("愛",mouseX,mouseY);
	}

	
}

