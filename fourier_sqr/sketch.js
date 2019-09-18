let time = 0;
let wave = [];
let slider;

function setup() {
  // put setup code here
  createCanvas(600,400);
  createP(" ");
  slider = createSlider(1, 40, 10);
}

function draw() {
  // put drawing code here
  background(215);

  translate(150, 200);

  stroke(8);
  line(-150, 0, 600-150 , 0);
  line(0, -200, 0, 200);
  let x = 0;
  let y = 0;

  for(let i = 0; i < slider.value(); i++){
    let prevx = x;
    let prevy = y;
    let n = i * 2 + 1;
    let radius = 75 * (4 / (n * PI));
    x += radius * cos(n * time);
    y += radius * sin(n * time);

    stroke(0, 50, 105, 75);
    noFill();
    ellipse(prevx, prevy, radius * 2);

    fill(255);
    stroke(0, 50, 105);
    line(prevx, prevy, x, y);
  }
  wave.unshift(y);

  translate(200, 0);
  line(x-200, y, 0, wave[0]);
  beginShape();
  noFill();
    for(let i = 0; i < wave.length; i++){
      vertex(i, wave[i]);
  }
  endShape();

  time += 0.03;
  if(wave.length > 250){
    wave.pop();
  }
}
