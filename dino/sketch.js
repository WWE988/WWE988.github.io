// let x = 100;
// let y = 100;
let sniper;
let img;
let img2
// let doggo;
// let bs;
let dino;
let sniper2 = [];
let soundclassifier;
function preload() {
  img = loadImage('googe_dino.png');
  img2 = loadImage('sniper.png');
  const options = { probabilityThreshold: 0.7 };
  soundclassifier = ml5.soundClassifier('SpeechCommands18w', options, modelReady);
}
function modelReady() {
 console.log("OKAY") 
}

function setup() {
  createCanvas(600, 600);
  dino = new Dino();
  sniper = new Sniper();
  soundclassifier.classify(gotResult);
  // doggo = new Dog();
  // doggo.woof();
  // bs = new Bs();
}
function gotResult(error,result) {
 if(error) {
  console.log(error);
   return
 }
   console.log(result[0]);
   if(result[0].label == 'up') {
    dino.jump(); 
   }
}

function draw() {
  background(220);
  // fill(0,255,0);
  // rect(100,100,60,60);
  // fill(0,0,255);
  // circle(300,300,50);
  // ellipse(400,400,30,60);
  // image(img,x,y,100,100);
  
  //sniper.show();
  //sniper.move();
  if(random(1) < 0.005) {
   sniper2.push(new Sniper()); 
  }
  
  for (let item of sniper2) {
   item.show();
   item.move();
   if (dino.hits(item)) {
    console.log("Game Over");
     noLoop();
   }
  } 
  
  dino.show();
  dino.move();
}
function keyPressed() {
  // console.log(key);
  // if (key == 'w') {
  //   y -= 5
  // }
  //  if (key == 'a') {
  //   x -= 5
  // }
  //  if (key == 's') {
  //   y += 5
  // }
  //  if (key == 'd') {
  //   x += 5
  // }
  // if (key == 'w') {
  //   bs.moveUp();
  // }
  //  if (key == 'a') { 
  if (key == ' ') {
    dino.jump();
  }
function mouseClicked() {
 dino.jump(); 
}
}