var clock;

function setup(){
  clock = createCanvas(380, 200);
  clock.id('clock');
  clock.position(0, 0);
  clock.style('display', 'block');
  angleMode(DEGREES);
}

function draw(){
  background(255, 250, 240);
  translate(200, 105);
  rotate(-90);

  let hr = hour();
  let min = minute();
  let sec = second();

  strokeWeight(6);
  stroke(255, 100, 150);
  noFill();
  let secondAngle = map(sec, 0, 60, 0, 360);
  arc(0, 0, 180, 180, 0, secondAngle);

  stroke(150, 100, 255);
  let minuteAngle = map(min, 0, 60, 0, 360);
  arc(0, 0, 165, 165, 0, minuteAngle);

  stroke(150, 255, 100);
  let hourAngle = map(hr % 12, 0, 12,0, 360);
  arc(0, 0, 150, 150, 0, hourAngle);

  push();
  strokeWeight(3);
  rotate(secondAngle);
  stroke(255, 100, 150);
  line(0, 0, 40, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke(150, 100, 255);
  line(0, 0, 50, 0);
  pop();

  push();
  strokeWeight(7);
  rotate(hourAngle);
  stroke(150, 255, 100);
  line(0, 0, 28, 0);
  pop();

  stroke(255);
  point(0, 0);
}

new p5(clock, 'clockPosition');
