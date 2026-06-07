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

  ellipse(140, 185, 50, 10);
  ellipse(260, 185, 50, 10);

  fill('#FFE0C0');
  rect(149, 300, 100, 115);

  fill('#FFE5CC');
  ellipse(200, 220, 200, 250);   

  fill('#FFC080');
  arc(78, 230, 40, 60, radians(92), radians(268));
  arc(325, 225, 30, 60, radians(270), radians(95));

  fill('#200000');
  ellipse(150, 225, 35, 35);
  ellipse(250, 225, 35, 35);

  fill(220);
  circle(255, 217, 7);
  circle(155, 217, 7);

  fill('#200000');
  ellipse(200, 110, 220, 140);
  ellipse(90, 160, 70, 140);
  ellipse(310, 160, 70, 140);

  ellipse(140, 120, 50, 90);
  ellipse(180, 110, 50, 100);
  ellipse(220, 110, 50, 100);
  ellipse(260, 120, 50, 90);

  fill('#200000');
  ellipse(200, 300, 40, 10);

  fill('#FF9EB5');
  circle(80, 80, 20);
  circle(100, 80, 20);
  triangle(70, 85, 110, 85, 90, 115);

  fill('#DBAFA0');
  ellipse(200, 260, 12, 8);

  fill('#E5E5E5');
  ellipse(325, 267, 8, 8);  
  ellipse(75, 273, 8, 8);
}