class Box{
    constructor(x,y,width,height){
        this.box = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        World.add(world,this.box);
    }
    display(){
        fill("red");
        rect(this.box.position.x,this.box.position.y, this.width, this.height);
    }
}