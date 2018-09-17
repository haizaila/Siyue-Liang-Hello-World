var a;
var b;
var c;
var d;
function setup() {
  createCanvas(1700, 600); 
  frameRate(15); 
  a = 600;
  b = 0;
  c = 300;
  
}

function draw(){
  d = random(1700);
  background(240, 178, 122);
  stroke("#BA4A00");
  strokeWeight(random(20,200));
  line(0,a,width,a);
  stroke("#D35400");
  strokeWeight(random(20,200));
  line(0,b,width,b);
  stroke("#A04000");
  strokeWeight(random(20,200));
  line(0,c,width,c);
  stroke("#F7DC6F");
  strokeWeight(random(20,200));
  line(d,0,d,height);
  a = a - 0.5;
  b = b + 2;
  c = c - 1;
  if (a < 0) {
    a = height;
  }
  if (b > height) {
    b = 0;
  }
  if (c < 0) {
    c = height;
  }


}