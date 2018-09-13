var mouseclicks = [];


function setup(){
	createCanvas(600,600);
}


function draw(){
	background(250);
	
	fill(100,100,200);
	for(var i=0; i< mouseclicks.length; i++){
		ellipse(mouseclicks[i].x,mouseclicks[i].y,10);
		mouseclicks[i].x = mouseclicks[i].x + random(10);
		mouseclicks[i].y = mouseclicks[i].y + random(10);
	}

}


function mouseClicked(){
	var clickposition = {
		x: mouseX,
		y: mouseY,
	}
	mouseclicks.push(clickposition);
}