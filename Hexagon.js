class Hexagon extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("HexagonStriker.PNG");
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      super.display();
    }
}