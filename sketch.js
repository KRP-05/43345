var gamestate=0


function preload()
{
	
}

function setup() {
	createCanvas(750,500);
  

	playbutton=createSprite(750/2,200,150,45)
  playbutton.visible=false

  soundoff=createSprite(700,50,30,30)



  
}


function draw() {
  rectMode(CENTER);
  background(200);

  if(gamestate===0){
    playbutton.visible=true

    if(mousePressedOver(playbutton)){
      gamestate=1
    }
if(touches.length>0){
	gamestate=1}
    
  }
  if(gamestate===1){
    bb=createSprite(100,100,100,100)
    bb.shapeColor='red'
  }
  
  drawSprites();
 
}



