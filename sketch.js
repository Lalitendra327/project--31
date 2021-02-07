const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var division1, division2, division3, division4, division5, division6, division7;
var plinko1, particle1;

var particles = [];
var plinkoes = [];
var divisions = [];



function setup() {
  createCanvas(480,750);

  engine = Engine.create();
  world = engine.world;

  divisionHeight = 300;

  ground = new Ground(240, 715, 480, 10);

  division1 = new Division(240,570,10,300);
  division2 = new Division(320,570,10,300);
  division3 = new Division(400,570,10,300);
  division4 = new Division(480,570,10,300);
  division5 = new Division(160,570,10,300);
  division6 = new Division(80,570,10,300);
  division7 = new Division(0,570,10,300);

 /* for (var i=0; i<width, i=i+80;){
    divisions.push(new Division(i, height-divisionHeight/2,20,divisionHeight));
    
  }*/

  for(var j = 40; j < width; j=j+50){
    
    plinkoes.push(new Plinko(j,75));

  }

  for(var j = 15; j < width; j=j+50){
    
    plinkoes.push(new Plinko(j,175));

  }

  for(var j = 40; j < width; j=j+50){
    
    plinkoes.push(new Plinko(j,275));

  }

  for(var j = 15; j < width; j=j+50){
    
    plinkoes.push(new Plinko(j,375));

  }

  

  
  
}

function draw() {
  background("black"); 
  Engine.update(engine);

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

  for(var j = 0; j<plinkoes.length; j++){
    plinkoes[j].display();
  }
  
  for(var i = 0; i<particles.length; i++){
    particles[i].display();
  }

 /* for(var k = 0; i<divisions.length; k++){
    particles[k].display();
  }*/
  
  ground.display();

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();

  

 
  

  drawSprites();


}

