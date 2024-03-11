function setup() {
  createCanvas(320, 240);
}

function draw() {
  background(152, 242, 450)
  // check to condition of the mouse
  if(mouseIsPressed){ // true or false?
    // if true, change the fill color here
    fill(255, 133, 247)
  }
  else { 
    // otherwise do this:
    fill(250, 239, 152)
  }
  ellipse(width/2, height/2, 100, 100);

}
