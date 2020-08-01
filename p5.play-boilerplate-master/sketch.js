var homescreen,read;
var flag=0;
function setup() {
  createCanvas(800,400);
  homescreen=new HomeScreen();
}

function draw() {
  background(255,255,255);  
  homescreen.display();
 
   
  
}