class Bs {
 constructor() {
  this.x = 100;
  this.y = 100;
  this.w = 100;
 }
  show() {
   image(img,this.x,this.y,this.w,this.w);
  }
  moveUp() {
   this.y -= 10;
  }
  moveDown(){
    this.y += 5;
  }
  moveLeft() {
   this.x -= 5; 
  }
  moveRight() {
    this.x += 5
  }
}