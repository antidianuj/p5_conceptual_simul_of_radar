

let oscCount = 2;
let allOscs = [];
let fft;
let minFreq = 100;
let maxFreq = 1000;
var df=0;
function setup() {
  createCanvas(700, 700);
  for (let i = 0; i < oscCount; i++) {
    
    let osc = new p5.Oscillator();
    osc.setType('sine');
    osc.freq(minFreq+df);
    // scale amplitude to number of oscillators
    osc.amp(1.0 / (2*oscCount)); 
    osc.start();
    allOscs.push(osc);
    df+=10;
  }
  fft = new p5.FFT();
  

}
function draw() {
  background(0);
  textSize(20);
  text('frequency scale', 10, 650);
   let v0 = createVector(10, 600);
  let v1 = createVector(10, 10);
  drawArrow(v0, v1, 'white');
  
  textSize(20);
  text('time scale', 600, 50);
   let b0 = createVector(600, 10);
  let b1 = createVector(10, 10);
  drawArrow(b0, b1, 'white');
  stroke(90);
  // analyze the audio signal and draw frequency
  // intensities
  // let bins = fft.analyze();
  // for (let i = minFreq; i < maxFreq; i++) {
  //   let drawY = map(i, minFreq, maxFreq, 0, height);
  //   let val = fft.getEnergy(i);
  //   let lineWidth = map(val, 0, 255, 0, 100);
  //   line(0, drawY, lineWidth, drawY);
  // }
  // draw original frequencies
  stroke(200,0,0);
  strokeWeight(5); 
  for (let i = 0; i < allOscs.length; i++) {
    let drawY = map(
      allOscs[i].f, minFreq, maxFreq, 0, height);
    line(0, drawY, 100, drawY);
  }
  strokeWeight(1); 
  
  
  
  //draw signal
    let waveform = fft.waveform();
  noFill();
  beginShape();
  stroke(255);
  for (let i = 0; i < waveform.length; i++){
    let x = map(i, 0, waveform.length, 0, width);
    let y = map( waveform[i], -1, 1, 0, height);
    vertex(x,y);
  }
  endShape();
}
function mousePressed() {
  for (let i = 0; i < oscCount; i++) {

    allOscs[i].freq(minFreq+df);    
    df+=0.6*df;
  }
}

function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}