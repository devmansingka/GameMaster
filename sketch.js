var car, carImage;

function preload() {
  carImage = loadImage("playerCar.jpg");
}

function setup() {
  createCanvas(400, 400);
  
  car = createSprite(200, 350, 10, 10);
  car.loadImage(carImage);
  
}

function draw() {
  background("grey");
  
  //make 3 sections
  for (var i = 0; i < 400; i = i + 100) {
    stroke("white");
    strokeWeight(10);
    rect(265, i, 3, 70);
  }
  
  for (var j = 0; j < 400; j = j + 100) {
    rect(135, j, 3, 70);
  }
  
}