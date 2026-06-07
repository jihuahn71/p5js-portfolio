let bgColor;

function setup() {
  createCanvas(600, 400);
  colorMode(RGB);
  bgColor = color('#CCE5FF');
}

function draw() {
  if (frameCount % 180 == 0) {
    bgColor = color(random(150, 255), random(180, 255), random(200, 255));
  }

  background(bgColor);

  let moveY = sin(frameCount * 0.05) * 10;
  let moveX = cos(frameCount * 0.04) * 8;
  let sizeChange = sin(frameCount * 0.08) * 10;

  let c1 = color('#993399');
  let c2 = color('#8080FF');
  let changeColor = lerpColor(c1, c2, (sin(frameCount * 0.03) + 1) / 2);

  strokeWeight(13);
  stroke('#0066CC');
  fill(255);
  ellipse(100,100 + moveY,100 + sizeChange,100 + sizeChange);
  ellipse(250,100 - moveY,100 - sizeChange,100 - sizeChange);
  ellipse(105 + moveX,290,70,150);
  ellipse(255 - moveX,250,60,150);

  fill(changeColor);
  ellipse(110,110 + moveY,70,50);

  fill('#8080FF');
  ellipse(260,110 - moveY,70,50);

  fill('#99CCFF');
  triangle(310,100,390,150,340,90);
  triangle(10,100,30,70,19,160);

  fill('#C0E0FF');
  rect(400,340,50,55);
  square(540,150,40);

  fill('#663366');
  square(450,300 + moveY,40);

  fill('#B2B2FF');
  square(480,200,50 + sizeChange);
  rect(490,11,60,40);

  circle(300 + moveX,300 + moveY,3);
  circle(350 + moveX,200 - moveY,3);
  circle(360 - moveX,250 + moveY,3);
  circle(500 + moveX,340,3);
  circle(480 - moveX,100 + moveY,3);
  circle(430 + moveX,90 - moveY,3);
  circle(250 - moveX,380,3);
  circle(270 + moveX,360 + moveY,3);

  fill(bgColor);
  circle(310 + moveX,340,3);
  circle(380 - moveX,120 + moveY,3);
  circle(470 + moveX,110 - moveY,3);
  circle(450 - moveX,120,3);
  circle(400 + moveX,170 + moveY,3);
  circle(390 - moveX,180 - moveY,3);
  circle(420 + moveX,200,3);
  circle(423 - moveX,210 + moveY,3);
  circle(417 + moveX,220 - moveY,3);
  circle(403 - moveX,250,3);
  circle(399 + moveX,270 + moveY,3);
  circle(387 - moveX,299 - moveY,3);
  if (frameCount == 360) {
  saveGif('myAnimation', 6);
}
}