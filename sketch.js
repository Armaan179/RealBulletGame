var wall,thickness;
var bullet,speed,weight;
function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52)
  bullet = createSprite(50, 200, 50, 10);
  wall = createSprite(1500, 200, thickness, height/2);
  wall.shapeColor=rgb(80,80,80);
  bullet.shapeColor=("white");
  thickness=random(22,83);
}

function draw() {
  background(0);

  bullet.velocityX = speed;
  if(hasCollided(bullet, wall)){
    bullet.velocityX=0;
    var damage=(0.5 * weight * speed * speed) /(thickness * thickness * thickness);
    console.log(damage);
    if(damage>10){
      wall.shapeColor="red";
      
    }
    if (damage<10){
      wall.shapeColor="green";
    }
  }

 drawSprites();
  }
 
