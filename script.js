function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  stroke(255);
  angleMode(DEGREES); 
  
// drawingContext.imageSmoothingEnabled = false;
}


function draw() {
  background(255, 40);
  noStroke();
  fill('#FEC451');
  ellipse(windowWidth / 2 - 300, windowHeight / 2, 100 * sin(frameCount), 100 * sin(frameCount));
  fill('#F6A451');
  ellipse(windowWidth / 2 - 100, windowHeight / 2,  100 * sin(frameCount + 22.5), 100 * sin(frameCount + 22.5));
  fill('#4185F4');
  ellipse(windowWidth / 2 + 100, windowHeight / 2,  100 * sin(frameCount + 45), 100 * sin(frameCount + 45));
  fill("black");
  ellipse(windowWidth / 2 + 300, windowHeight / 2,  100 * sin(frameCount + 67.5), 100 * sin(frameCount + 67.5));



}