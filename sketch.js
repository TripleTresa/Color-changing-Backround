var btn_red;
var btn_green;

function setup() {
  createCanvas(400,400);
  somthing = createSprite(200, 200, 400, 400);
  btn_red = createButton("Red");
  btn_red.position(100,50);
  btn_red.mousePressed(red_bg);
  btn_green = createButton("Green");
  btn_green.position(250,50);
  btn_green.mousePressed(green_bg);
}

function draw() 
{
  background(30);
  drawSprites();
}

function red_bg()
{
  r = 255;
  g = 0;
  b = 0;
  somthing.shapeColor = rgb(r,g,b);
}

function green_bg() {
  r = 0;
  g = 255;
  b = 0;
  somthing.shapeColor = "green";
}




