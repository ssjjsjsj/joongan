let set01, set02;
let pg0, pg, pg1, pg2, pg3, pg4;
let capture;
let w = 300;
let h = 300;

function preload(){
  set01 = loadImage("b.png");
  set02 = loadImage("b2.png");
  //set11 = loadImage("0...png");
  //set12 = loadImage("4...png");
  set03 = loadImage("p.png");
  set04 = loadImage("p2.png");
}

function setup() {
  pg0=createGraphics(400,400);

  pg1=createGraphics(550,550);

  pg2=createGraphics(700,700);

  pg3=createGraphics(850,850);

  pg4=createGraphics(1000,1000);

  
  createCanvas(1000,1000);
  background(0);
     
  
  capture = createCapture(VIDEO);
  capture.size(200,200);
  capture.hide();
}

function draw() {
  imageMode(CENTER);
  
 
  image(pg4,500,500, pg4.width, pg4.height);
  image(pg3,500,500, pg3.width, pg3.height);
  image(pg2,500,500, pg2.width, pg2.height);
  image(pg1,500,500, pg1.width, pg1.height);
  image(pg0,500,500, pg0.width, pg0.height);
 

  
  capture.loadPixels();
  pg0.background(255);
  let magW = pg0.width/capture.width;
  let magH = pg0.height/capture.height;
  let interval = 18;
  for (let y=0; y<capture.height; y=y+interval) {
    for (let x=0; x<capture.width; x=x+interval) {
      let idx = x + y * capture.width;
      let r = capture.pixels[idx*4];
      let g = capture.pixels[idx*4 + 1];
      let b = capture.pixels[idx*4 + 2];
      let gr = (r + g + b)/3.0; 
      if (gr<170) {
        pg0.image(set02, x*magW, y*magH, magW*interval,magH*interval);
      } else {
        pg0.image(set01, x*magW, y*magH, magW*interval, magH*interval);
      }
 
    }
  }
  
  pg1.background(255);
  noStroke();
  sixmagW = pg1.width/capture.width;
  sixmagH = pg1.height/capture.height;
  interval = 15;
  for (let y=0; y<capture.height; y=y+interval) {
    for (let x=0; x<capture.width; x=x+interval) {
      let idx = x + y * capture.width;
      let r = capture.pixels[idx*4];
      let g = capture.pixels[idx*4 + 1];
      let b = capture.pixels[idx*4 + 2];
      let gr = (r + g + b)/3.0; 
      if (gr<170) {
        pg1.image(set03, x*sixmagW, y*sixmagH, sixmagW*interval,sixmagH*interval);
      } else {
        pg1.image(set04, x*sixmagW, y*sixmagH, sixmagW*interval,sixmagH*interval);
      }
 
    }
  }
  
  
  pg2.background(255);
  sixmagW = pg2.width/capture.width;
  sixmagH = pg2.height/capture.height;
  interval = 9;
  for (let y=0; y<capture.height; y=y+interval) {
    for (let x=0; x<capture.width; x=x+interval) {
      let idx = x + y * capture.width;
      let r = capture.pixels[idx*4];
      let g = capture.pixels[idx*4 + 1];
      let b = capture.pixels[idx*4 + 2];
      let gr = (r + g + b)/3.0; 
      if (gr<170) {
        pg2.image(set02, x*sixmagW, y*sixmagH, sixmagW*interval,sixmagH*interval);
      } else {
        pg2.image(set01, x*sixmagW, y*sixmagH, sixmagW*interval,sixmagH*interval);
      }
 
    }
  }
  
  pg3.background(255);
  sixmagW = pg3.width/capture.width;
  sixmagH = pg3.height/capture.height;
  interval = 5;
  for (let y=0; y<capture.height; y=y+interval) {
    for (let x=0; x<capture.width; x=x+interval) {
      let idx = x + y * capture.width;
      let r = capture.pixels[idx*4];
      let g = capture.pixels[idx*4 + 1];
      let b = capture.pixels[idx*4 + 2];
      let gr = (r + g + b)/3.0; 
      if (gr<170) {
        pg3.image(set03, x*sixmagW, y*sixmagH, sixmagW*interval,sixmagH*interval);
      } else {
        pg3.image(set04, x*sixmagW, y*sixmagH, sixmagW*interval,sixmagH*interval);
      }
 
    }
  }
  
  
  
  pg4.background(255);
  sixmagW = pg4.width/capture.width;
  sixmagH = pg4.height/capture.height;
  interval = 3;
  for (let y=0; y<capture.height; y=y+interval) {
    for (let x=0; x<capture.width; x=x+interval) {
      let idx = x + y * capture.width;
      let r = capture.pixels[idx*4];
      let g = capture.pixels[idx*4 + 1];
      let b = capture.pixels[idx*4 + 2];
      let gr = (r + g + b)/3.0; 
      if (gr<170) {
        pg4.image(set02, x*sixmagW, y*sixmagH, sixmagW*interval,sixmagH*interval);
      } else {
        pg4.image(set01, x*sixmagW, y*sixmagH, sixmagW*interval,sixmagH*interval);
      }
 
    }
  }
  
  

 

}
      
    