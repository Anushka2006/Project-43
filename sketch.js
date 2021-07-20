var bg,bg2,form,system,code,security, bg3, cashImg;
var score=0;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  //load image for the treasure background
  
  bg3= loadImage("aladdin_cave2.jpg")
  bg2= loadImage("treasure2.jpg")
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
 
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background
  
  
  if(score === 3) {
    clear()
    background(bg3)
    textSize(20);
  fill("white");
  textFont("Gregorian");
  text("Score: " + score, 450, 50);
    fill("black")
    textFont("Gregorian");
    textSize(60);
    text("One last step to reach the Treasure",130, 150);
    security.display2();
    final();
  }

  if(score === 50) {
    clear()
    background(bg2)
    fill("white");
  textFont("Gregorian");
  text("BALANCE: $100000000", 420, 50);
    fill("white");
    textSize(50);
    textFont("Comic Sans MS")
    text("Jo hukam mere Aaka!!",125, 130);
    fill(rgb(random(19,100), 13, 120))
    textSize(50);
    textFont("Comic Sans MS")
    text("Congratulations!! Treasure Unlocked",125, 200);
    fill(rgb(random(100,175), 13, 74));
    text("Aladdin's Treasure",235, 270)
    


  drawSprites()
}
}