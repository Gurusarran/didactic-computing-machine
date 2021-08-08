const Engine = Matter.Engine;
const World= Matter.World;
const bodies= Matter.bodies;



var score = 0;
var creep,ground,creepImg, player,playerimg, bosscreep,bosscreepimg;
var backimg,playerrfire,playerrfireimg,playermove,playerstand;
var rock,rockGroup, rockimg;


function preload(){
  
   creepImg=loadImage("creep.png");
  bosscreepImg=loadImage("bosscreep.png");
  playerstand=loadImage("he stanf.png");
  playerimg=loadAnimation("herun1.png","herun2.png", "run3.png");
  backImg=loadImage("back.png");
  playerrfireImg=loadImage("rightfire.png");
  rockImg=loadImage("rock.png");

}



function setup() {
createCanvas(600,800)
 
  ground=createSprite(10,250,1200,100);
  
  //creating background
  background = createSprite(0,0,600,800);
  background.addImage(backImg);
  background.scale = 2.5
  
  player=createSprite(90,120,20,90);
  player.addAnimation("move",playerstand);
  player.scale= 0.3;
  
  rockGroup= new Group();
  
    
 
  
}

function draw() {
  //background("black");

  // moving ground
    //background.velocityX = -1.3 

    //if (background.x < 0){
     // background.x = background.width/2;
    //}
    
    textSize(30);
    fill("red");
    stroke("red");
    text("SCORE: "+ score, 300,50);
    score= score+ Math.round(frameCount/60);


  player.collide(ground);
  if(keyDown("right")){
    player.x= player.x+5;
    player.changeAnimation("run",playerimg);
  }
  
  if(keyDown("left")){
    player.x= player.x-5;
    
  }
  
  if(keyDown(UP_ARROW)){
    player.velocityY= -10;
  }
  player.velocityY= player.velocityY+0.5;
  
  
  spawnRocks();
  
  

  if(rockGroup.isTouching(player)){
   //score=score-100;
   rock.velocityX=0;
   player.velocityX=0;
   
  }

  
  
  
  
  
  drawSprites();
    
}

function spawnRocks(){
  
  if(frameCount %180===0 ){
    rock=createSprite(600,165,70,60);
    rockGroup.add(rock);
    rock.velocityX= -2;
    
  
    rock.addImage(rockImg);
    rock.scale=0.5;
    rock.lifetime= 1200;
    player.depth=rock.depth;
    rock.depth=rock.depth+1;
  }
}

