class Umbrella {
  constructor(x,y){
      var options = {
          isStatic: true,
      }
      this.umbrella = Bodies.circle(x,y,90,options);
      this.radius = 90;
      World.add(world, this.umbrella)
  }

  display(){
      var pos = this.umbrella.position;
      imageMode(CENTER);
  }
}