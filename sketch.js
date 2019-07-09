// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/urR596FsU68

// module aliases
var Engine = Matter.Engine,
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];

var ground;

function setup() {
  createCanvas(1366, 657);
  
  engine = Engine.create(); 
  world = engine.world;
  //world.gravity.y = 0;
  //Engine.run(engine);
  var options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200, height, width, 100, options);
  World.add(world, ground);
}


function mouseDragged() {
  boxes.push(new SolidBox(mouseX, mouseY, random(10, 40), random(10, 40)));
}

function mousePressed() {
  boxes.push(new SolidBox(mouseX, mouseY, random(10, 40), random(10, 40)));
}


function draw() {
  background(0);
  
  Engine.update(engine);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
  noStroke(255);
  fill(170);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width, 100);

}

