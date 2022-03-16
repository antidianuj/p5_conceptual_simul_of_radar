
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
  let yp=0;
if(time<14)
  {
          for (let i = 0; i < 2; i++) {

            
    let prevx = x;
    let prevy = yp;

    let n = i * slider.value()+ 1;
    let radius = 75 * (4 / ((4*i+1) * PI));
    x += radius * cos(n * time);
    yp += radius * sin(n * time);

    stroke(0, 100);
    noFill();
    // ellipse(prevx, prevy, radius * 2);

    //fill(255);
    stroke(255);
    // line(prevx, prevy, x, y);
    if(i==0)
    {
    strokeWeight(20); // Default
    ellipse(360, 0, 2*yp,2*radius)
    strokeWeight(2); // Default
    }
    else{
      strokeWeight(20); // Default
      stroke(255, 0,0);
      ellipse(360, 0, yp,radius)
      stroke(255, 255,255);
      strokeWeight(2); // Default
    }
  }

    
  for (let i = 0; i < 1; i++) {
    let prevx = x;
    let prevy = y;

    let n = i * slider.value()+ 1;
    let radius = 75 * (4 / ((4*i+1) * PI));
    x += radius * cos(n * time);
    y += radius * sin(n * time);

    stroke(0, 100);
    noFill();
    // ellipse(prevx, prevy, radius * 2);

    //fill(255);
    stroke(255);
    // line(prevx, prevy, x, y);
    strokeWeight(20); // Default
    //line(0,0, 0, y);
    // ellipse(360, 0, 2*y,2*radius)
    strokeWeight(2); // Default
    //ellipse(x, y, 8);
  }
  wave.unshift(y);


  translate(0, 0);
  // line(x - 200, y, 0, wave[0]);
  beginShape();
  noFill();
  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  endShape();

 


  if (wave.length > 250) {
    wave.pop();
  }
  }

  if(time<16 & time>=14)
    {
            for (let i = 0; i < 2; i++) {
    let prevx = x;
    let prevy = yp;

    let n = i * slider.value()+ 1;
    let radius = 75 * (4 / ((4*i+1) * PI));
    x += radius * cos(n * time);
    yp += radius * sin(n * time);

    stroke(0, 100);
    noFill();
    // ellipse(prevx, prevy, radius * 2);

    //fill(255);
    stroke(255);
    if(i==0)
    {
    strokeWeight(20); // Default
    ellipse(360, 0, 2*yp,2*radius)
    strokeWeight(2); // Default
    }
    else{
      strokeWeight(20); // Default
      stroke(255, 0,0);
      ellipse(360, 0, yp,radius)
      stroke(255, 255,255);
      strokeWeight(2); // Default
    }
  }
    }
  
  if(time>=16 & time<34)
    
  {
     

  let x = 0;
  let y = 0;
    
  for (let i = 0; i < 2; i++) {
    let prevx = x;
    let prevy = y;

    let n = i * slider.value()+ 1;
    let radius = 75 * (4 / ((4*i+1) * PI));
    x += radius * cos(n * time);
    y -= radius * sin(n * time);

    stroke(0, 100);
    noFill();
    // ellipse(prevx, prevy, radius * 2);

    //fill(255);
    stroke(255);


    if(i==0)
    {
    strokeWeight(20); // Default
    ellipse(360, 0, 2*y,2*radius)
    strokeWeight(2); // Default
    }
    else{
      strokeWeight(20); // Default
      stroke(255, 0,0);
      ellipse(360, 0, y,radius)
      stroke(255, 255,255);
      strokeWeight(2); // Default
    }

  }
  wave.unshift(y);


  translate(40, 0);
  // line(x - 200, y, 0, wave[0]);
  beginShape();
  noFill();
  for (let i = 0; i < wave.length; i++) {
    vertex(wave.length-i, wave[i]);
  }
  endShape();


  if (wave.length > 250) {
    wave.pop();
  }
  }
   time += 0.05;
  
}


function preload()
{
  bg=loadImage('radar.png')
}