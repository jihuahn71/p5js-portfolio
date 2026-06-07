function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(220);
 
  noStroke();
  fill('#200000');

  rect(70, 200, 80, 300);   
  rect(250, 200, 80, 300);  

  ellipse(110, 500, 80, 80);
  ellipse(290, 500, 80, 80);
  noStroke();
  fill('#200000');

  ellipse(140, 185, 50, 10);

  ellipse(260, 185, 50, 10);
  fill('#FFE0C0');
  rect(149,300,100,115);
  fill('#FFE5CC');
  ellipse(200,220,200,250);   
  arc(80,230,60,80,radians(90),radians(270));
  arc(320,225,60,80,radians(270),radians(95));
  fill('#FFC080');
  arc(78,230,40,60,radians(92),radians(268));
  arc(325,225,30,60,radians(270),radians(95));
 fill('#200000');
  
  circle(150,225,35);
  circle(250,225,35);
  fill(220);
  circle(255,217,7);
  circle(155,217,7);

  noStroke();
  fill('#200000');
  ellipse(200, 110, 220, 140);
  ellipse(90, 160, 70, 140);
  ellipse(310, 160, 70, 140);
  
  fill('#200000');
  ellipse(140, 120, 50, 90);
  ellipse(180, 110, 50, 100);
  ellipse(220, 110, 50, 100);
  ellipse(260, 120, 50, 90);

  fill('#200000');
  ellipse(200, 300, 40, 10);
  
  noStroke();
  fill('#FF9EB5');

  circle(80, 80, 20);
  circle(100, 80, 20);
  triangle(70, 85, 110, 85, 90, 115);

  circle(320, 100, 25);
  circle(345, 100, 25);
  triangle(310, 105, 360, 105, 335, 140);

  circle(350, 300, 26);
  circle(375, 300, 26);
  triangle(340, 305, 390, 305, 365, 335);

  noStroke();
  fill('#200000');

  ellipse(147, 189, 60, 10);

  ellipse(249, 189, 60, 10);

  fill('#DBAFA0');
  ellipse(200, 260, 12, 8);
  
  noStroke();
  fill('#E5E5E5');
  ellipse(325, 267, 8, 8);  
  ellipse(75, 273, 8, 8);

}

let eye = 35;
let dir = -1;
let moveX = 0;

function keyPressed() {
  if (key === 's') {
    saveGif('myCharacter', 5);
  }
}

function draw() {
    background(220);
 

  moveX = map(mouseX, 0, width, -20, 20);

  eye += dir;
  if (eye < 29  || eye > 35) {
    dir *= -1;
  }

  noStroke();
  fill('#200000');

  rect(70 + moveX, 200, 80, 300);   
  rect(250 + moveX, 200, 80, 300);  

  ellipse(110 + moveX, 500, 80, 80);
  ellipse(290 + moveX, 500, 80, 80);

  ellipse(140 + moveX, 185, 50, 10);
  ellipse(260 + moveX, 185, 50, 10);
  fill('#FFE0C0');
  rect(149 + moveX,300,100,115);

  fill('#FFE5CC');
  ellipse(200 + moveX,220,200,250);   

  fill('#FFC080');
  arc(78 + moveX,230,40,60,radians(92),radians(268));
  arc(325 + moveX,225,30,60,radians(270),radians(95));

  fill('#200000');
  

  ellipse(150 + moveX,225,eye,eye);
  ellipse(250 + moveX,225,eye,eye);

  fill(220);
  circle(255 + moveX,217,7);
  circle(155 + moveX,217,7);

  fill('#200000');
  ellipse(200 + moveX, 110, 220, 140);
  ellipse(90 + moveX, 160, 70, 140);
  ellipse(310 + moveX, 160, 70, 140);

  ellipse(140 + moveX, 120, 50, 90);
  ellipse(180 + moveX, 110, 50, 100);
  ellipse(220 + moveX, 110, 50, 100);
  ellipse(260 + moveX, 120, 50, 90);


  if (keyIsPressed) {
    fill('#200000');
    ellipse(200 + moveX, 300, 60, 30);
  } else {
    fill('#200000');
    ellipse(200 + moveX, 300, 40, 10); 
  }

  fill('#FF9EB5');
  circle(80, 80, 20);
  circle(100, 80, 20);
  triangle(70, 85, 110, 85, 90, 115);

  fill('#DBAFA0');
  ellipse(200 + moveX, 260, 12, 8);

  fill('#E5E5E5');
  ellipse(325 + moveX, 267, 8, 8);  
  ellipse(75 + moveX, 273, 8, 8);



} 

