var tree;

function preload() {
  tree = loadImage("images/tree.png")
}
function setup() {
  createCanvas(1450,700);

  tree = new Tree(1000,650);
}

function draw() {
  background(255,255,255);  

  tree.display();

  drawSprites();
}