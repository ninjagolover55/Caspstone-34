class Car {

    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.carImage = loadImage('assets/car.jpg');

        var options = {
            isStatic: true
        };

        this.car = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.car);
    
    }

   display(){
    push()
    imageMode(CENTER);
    image(this.carImage , this.car.position.x , this.car.position,y , this.w  , this.h);
    pop()
   }
}
    
