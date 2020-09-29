class Ground {
constructor(x,y,width,length){
var ground_options = {
    isStatic: true
}
this.body = Bodies.rectangle(x,y,width,length,ground_options);
this.width = width;
this.length = length;
World.add(world,this.body)
}
display(){
    var pos = this.body.position;
    fill(255);
rect(pos.x,pos.y,this.width, this.height)
}

}