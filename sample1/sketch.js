let bgColor;

function setup() {
  createCanvas(600, 400);
  colorMode(RGB);
  bgColor = color('#CCE5FF');
}

function draw() {
  background(bgColor);

  strokeWeight(13);
  stroke('#0066CC');

  fill(255);
  ellipse(100, 100, 100, 100);
  ellipse(250, 100, 100, 100);
  ellipse(105, 290, 70, 150);
  ellipse(255, 250, 60, 150);

  fill('#993399');
  ellipse(110, 110, 70, 50);

  fill('#8080FF');
  ellipse(260, 110, 70, 50);

  fill('#99CCFF');
  triangle(310, 100, 390, 150, 340, 90);
  triangle(10, 100, 30, 70, 19, 160);

  fill('#C0E0FF');
  rect(400, 340, 50, 55);
  square(540, 150, 40);

  fill('#663366');
  square(450, 300, 40);

  fill('#B2B2FF');
  square(480, 200, 50);
  rect(490, 11, 60, 40);

  circle(300, 300, 3);
  circle(350, 200, 3);
  circle(360, 250, 3);
  circle(500, 340, 3);
  circle(480, 100, 3);
  circle(430, 90, 3);
  circle(250, 380, 3);
  circle(270, 360, 3);

  fill(bgColor);
  circle(310, 340, 3);
  circle(380, 120, 3);
  circle(470, 110, 3);
  circle(450, 120, 3);
  circle(400, 170, 3);
  circle(390, 180, 3);
  circle(420, 200, 3);
  circle(423, 210, 3);
  circle(417, 220, 3);
  circle(403, 250, 3);
  circle(399, 270, 3);
  circle(387, 299, 3);
}