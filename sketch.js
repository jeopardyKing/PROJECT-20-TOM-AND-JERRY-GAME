var garden,gardenImage;
var tom,tomAnimation,tomImage;
var game=1;
var play=1;
var end=2;


function preload() {
    tomAnimation1 =loadAnimation("cat1.png")
    tomAnimation=loadAnimation("cat2.png","cat3.png");

    //loading gardern image
    gardenImage=loadImage("garden.png");

    jerrystanding=loadAnimation("mouse2.png","mouse3.png");
    jerrycheese=loadAnimation("mouse1.png");

    //caught animation
    tomcaught=loadAnimation("cat4.png");
    jerrycaught=loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(975,575);

    //background Image
    garden=createSprite(width/2,height/2);
    garden.addImage(gardenImage);
    
    //create tom and jerry sprites here
    jerry=createSprite(150,450);
    jerry.scale=0.2;
    jerry.addAnimation("standing",jerrystanding);
    jerry.addAnimation("cheese",jerrycheese);
    jerry.addAnimation("caught",jerrycaught)
    jerry.debug=true;
    //jerry.addAnimation("waving",jeerystanding);
    
    //cat sprite
    tom=createSprite(800,450);
    tom.addAnimation("sitting",tomAnimation1);
    tom.addAnimation("walking",tomAnimation)
    tom.addAnimation("caught",tomcaught);
    tom.scale=0.2;
    tom.debug=true;
  // tom.setCollider("rectangle",0,0,10,10);
 
    
}

function draw() {
    
    background("black")
    
    if(tom.x-jerry.x<jerry.width/2+tom.width/2 && 
        jerry.x-tom.x<jerry.width/2+tom.width/2 &&
        jerry.y-tom.y<jerry.height/2+tom.height/2 &&
        tom.y-jerry.y<jerry.height/2+tom.height/2 ){
         
            tom.changeAnimation("caught",tomcaught);
            jerry.changeAnimation("caught",jerrycaught)
      
     }
     else{
      tom.changeAnimation("sitting",tomAnimation1);
      jerry.changeAnimation("cheese",jerrycheese)
         
     }
     
 
     
    //controls to cat
    if(keyDown("LEFT_ARROW")){
        keyPressed1();
    }
  
    if(keyDown("RIGHT_ARROW")){
        keyPressed2();
    }

    drawSprites();
    textSize(100);
    text(mouseX+","+mouseY,100,100);
    console.log(garden.x);
    
}


function keyPressed1(){

  //For moving and changing animation write code here
  tom.x=tom.x-5;
  tom.changeAnimation("walking",tomAnimation);
  jerry.changeAnimation("standing",jerrystanding)
  
  return;

}
function keyPressed2(){

    //For moving and changing animation write code here
    tom.x=tom.x+5;
    tom.changeAnimation("walking",tomAnimation);
    jerry.changeAnimation("standing",jerrystanding)
    
    return;
  
  }


