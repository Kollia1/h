class Block extends BaseClass {
  constructor(x, y,width,height){
    super(x,y,width,height);
    this.Visibility = 255;

  }
  display(){

    if(this.body.speed < 3){
     super.display()
    }
    else{
      World.remove(world, this.body);
      push();
      tint(255,this.Visiblity);
      this.Visiblity = this.Visiblity - 5;


      pop();
     
     
    }
    
  }

};
