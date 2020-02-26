class Sniper {
  constructor() {
   this.r = 200;
   this.x = width;
   this.y =  height - this.r;
  }
  move() {
   this.x -= 5; 
  }
  show() {
   rect(this.x,this.y,this.r,this.r);
    image(img2,this.x,this.y,this.r); 
  }
}
