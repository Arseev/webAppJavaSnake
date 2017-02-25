// Web Application Development
// Final Project
// Adam Seevers

//snake variable
var s;
//check the game ending parameters
var endGame;
//size of the width of columns and rows used for placing block and snake movement
var scl = 20;
//increase in snake length as it gets a block
var lUp;

//initialize the game board and the snake object and the block object
function setup() {
  createCanvas(600 ,600);
  keyCode = RIGHT_ARROW;
  s = new Snake();
  frameRate(10);
  pickLocation();
}

function newGame() {
  background(255,0,0);
  keyCode = RIGHT_ARROW;
  s = new Snake();
}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  lUp = createVector(floor(random(cols)), floor(random(rows)));
  lUp.mult(scl);
}

// draws the current snake onto the canvas of the html web page.
function draw() {
  if (s.tail.length > 5) {
    background(0);
  } else {
    background(165);
  }
  if (s.x == 0 && keyCode === LEFT_ARROW) {
     snake_die();
  }
  else if(s.y >= 580 && keyCode === DOWN_ARROW) {
     snake_die();
  }
  else if(s.y == 0 && keyCode === UP_ARROW) {
     snake_die();
  }
  else if(s.x >= 580 && keyCode === RIGHT_ARROW) {
     snake_die();
  }

  s.update();
  s.show();

//If snake eats a block, rendomly place a new block
  if (s.eat(lUp)) {
    pickLocation();
  }

  fill(0,0,255);
  rect(lUp.x, lUp.y, scl, scl);

}


// Monitors directional input for snake from the user via keyboard
function keyPressed() {
  if (keyCode === UP_ARROW) {
    if (s.yspeed !== 1)
      s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    if (s.yspeed !== -1)
      s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    if (s.xspeed !== -1)
      s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    if (s.xspeed !== 1)
      s.dir(-1, 0);
  }
}

//Parameters for the snake losing
function snake_die() {
  background(255,0,0);
}





