function setup() {
  createCanvas(800, 800);
}


function draw() {
  Gradient()
  FlowerPattern()
  Flying()
}

function Flower(){
  //Seed
  noStroke();
  fill('orange');
  ellipse(0, 0, 25, 25);
  //Petals
  noStroke();
  fill(0);
  //Making the Petals Rotate around the Seed
  for(var i =0; i < 8; i++){
    push();
    rotate(TWO_PI * i / 8);
    fill(255);
    ellipse(30, 0, 30, 20);
    pop();
  }  
}

function Bee(){
  //Bee wings
  fill('white')
  ellipse(mouseX, mouseY, 10, 50);
  //Bee Body
  fill('yellow')
  ellipse(mouseX, mouseY, 50, 20);
  fill('black')
  rect(mouseX, mouseY - 9, 5, 20);
  rect(mouseX + 15, mouseY - 6, 5, 12);
  //Bee head
  fill('yellow')
  ellipse(mouseX - 15, mouseY, 20, 20);
}

function Gradient(){
  //Background Color
  noStroke();
  background(51);
  let from = color(26, 234, 220);
  let to = color(238, 255, 5);
  colorMode(RGB); 
  let interA = lerpColor(from, to, 0.33);
  let interB = lerpColor(from, to, 0.66);
  fill(from);
  rect(0, 0, 800, 200);
  fill(interA);
  rect(0, 200, 800, 200);
  fill(interB);
  rect(0, 400, 800, 200);
  fill(to);
  rect(0, 600, 800, 200);
}

function   FlowerPattern(){
    //Makes the flowers show up in a pattern above the background colors
    for(var i=0; i < 900; i+=100){
    for(var j=0; j < 900; j+=100){
      push();
      translate(i,j);
      Flower();
      pop(); 
    }
  }
}

function Flying(){
  //Animating the Bees Flying
  Gradient()
  FlowerPattern()
  translate(mouseX + 225, mouseY + 225);
  rotate(radians(frameCount%360));
  for(var i =0; i < 8; i++){
    push();
    rotate(TWO_PI * i / 8);
    Bee()
    pop();
  }
}  

 
      
