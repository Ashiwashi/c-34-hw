class Ball {
    constructor(x,y) {
      var options = {
          restitution:1.0,
          friction:0.5,
          density:1.2,
          frictionAir:0.005

      }
      this.body = Matter.Bodies.circle(x,y,options);
      this.width = width/10;
      this.height = height/10;
      World.add(world, this.body);
      this.image = loadImage("Superhero-01.png");
    }
    display(){
      var pos =this.body.position;
      //ellipseMode(CENTER);

      image(this.image, 0, 0, this.width, this.height);
    }
  };