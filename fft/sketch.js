function preload(){
  // sound = loadSound('birds.mp3');
      sound = new p5.Oscillator();
 // sound.disconnect();
    sound.start();
}


function setup(){
  let cnv = createCanvas(800,800);
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT();
  sound.amp(0.2);
}

function draw(){
  background(220);
  // textSize(20);
  // text('frequency scale', 10, 650);
  //  let v0 = createVector(10, 600);
  // let v1 = createVector(10, 10);
  // drawArrow(v0, v1, 'Black');
  
  // textSize(20);
  // text('time scale', 600, 50);
  //  let b0 = createVector(600, 10);
  // let b1 = createVector(10, 10);
  // drawArrow(b0, b1, 'Black');
  
  var frequency = map(0,mouseY, width, 240, 8800);
  sound.freq(frequency);
  ellipse(height / 2, mouseY, 100, 100);
  // sound.add(1);
  // sound.amp(0.5);
  let spectrum = fft.analyze();
  noStroke();
  fill(255, 0, 255);
  for (let i = 0; i< spectrum.length; i++){
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width / spectrum.length, h )
  }

  let waveform = fft.waveform();
  noFill();
  beginShape();
  stroke(20);
  for (let i = 0; i < waveform.length; i++){
    let x = map(i, 0, waveform.length, 0, width);
    let y = map( waveform[i], -1, 1, 0, height);
    vertex(x,y);
  }
  endShape();

  // text('tap to play', 20, 20);
}

function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}