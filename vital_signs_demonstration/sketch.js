
let time = 0;
let wave = [];
let path = [];

let slider;

function setup() {
  createCanvas(600, 400);
  slider = createSlider(1, 50, 2);
}

function draw() {

   background(bg)
  translate(150, 200);

  let x = 0;
  let y = 0;

  for (let i = 0; i < 2; i++) {
    if(i==1)
    {

      let prevx = x;
      let prevy = y;
  
      let n = i * slider.value()+ 1;
      let radius = 75 * (4 / ((4*i+1) * PI));
      x += radius * cos(n * time);
      y += radius * sin(n * time);
  
      stroke(0, 100);
      noFill();
      ellipse(prevx, prevy, radius * 2);
  
      //fill(255);
      stroke(255);
      line(prevx, prevy, x, y);
      strokeWeight(20); // Default
      //line(0,0, 0, y);
      stroke(255, 0,0);
      ellipse(0, 0, 1*radius,1*y)
      stroke(255, 255,255);
      strokeWeight(2); // Default
    }
    else
    {
    let prevx = x;
    let prevy = y;

    let n = i * slider.value()+ 1;
    let radius = 75 * (4 / ((4*i+1) * PI));
    x += radius * cos(n * time);
    y += radius * sin(n * time);

    stroke(0, 100);
    noFill();
    ellipse(prevx, prevy, radius * 2);

    //fill(255);
    stroke(255);
    line(prevx, prevy, x, y);
    strokeWeight(20); // Default
    //line(0,0, 0, y);
    ellipse(0, 0, 2*radius,2*y)
    strokeWeight(2); // Default

    //ellipse(x, y, 8);
    }
  }
  wave.unshift(y);


  translate(200, 0);
  line(x - 200, y, 0, wave[0]);
  beginShape();
  noFill();
  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  endShape();

  time += 0.05;


  if (wave.length > 250) {
    wave.pop();
  }
  
}


function preload()
{
  bg=loadImage('guy.jpg')
}