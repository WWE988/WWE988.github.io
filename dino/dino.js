class Dino {
 constructor() {
  this.x = 50;
  this.y = height-100;
  this.w = 100;
  this.v = 0;
  this.gravity = 1.0;
 }
  hits(sniper) {
    let hit = collideRectRect(this.x,this.y,this.w,this.w,sniper.x,sniper.y,sniper.r,sniper.r);
    
    return hit;
  }
  jump() {
   this.v = -24
  }
  move() {
   this.y += this.v;
   this.v += this.gravity;
   this.y = constrain(this.y,0,height-this.w)
  }
  show() {
   rect(this.x,this.y,this.r,this.r);
    image(img,this.x,this.y,this.w,this.w); 
  }
  // moveUp() {
  //  this.y -= 10;
  // }
  // moveDown(){
  //   this.y += 5;
  // }
  // moveLeft() {
  //  this.x -= 5; 
  // }
  // moveRight() {
  //   this.x += 5
  // }
}