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
var printEndGame = false;
var newScore = true;


//initialize the game board and the snake object and the block object
function setup() {
  canvas = createCanvas(600 ,600);
  keyCode = RIGHT_ARROW;
  s = new Snake();
  var printEndGame = 0;
  frameRate(10);
  pickLocation();
}

function newGame() {
  var printEndGame = 0;
  document.getElementById('endOptions').innerHTML =" ";
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
  if (s.total > 5) {
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
  while (printEndGame == false) {
  	background(255,0,0);
  	var endOptions = document.createElement("div");
	var endClick = document.createElement("script");
  	var optionForm = document.createElement("div");
  	var submitScores = document.createElement("input");
  	var startNew = document.createElement("input");
	endClick.innerHTML ="document.getElementById('endNewGame').addEventListener('click',newGame);"
	endClick.innerHTML += "document.getElementById('submitScores').addEventListener('click',postScores);"
  	submitScores.type = "button";
	submitScores.id = "submitScores";
  	startNew.type = "button";
  	startNew.id= "endNewGame";
  	startNew.value = "New Game";
  	submitScores.value = "Submit Score";
	endOptions.id = "endOptions";
  	endOptions.innerHTML = "<div style='text-align: center'>GAME OVER</br>Score: "+s.total+"\n</div>";
  	optionForm.appendChild(submitScores);
  	optionForm.appendChild(startNew);
  	endOptions.appendChild(optionForm);  
	document.body.appendChild(endOptions);	
  	document.body.appendChild(optionForm);
	document.body.appendChild(endClick);
  	printEndGame = true;
	}
  document.getElementById('endOptions').innerHTML = "<div style='text-align: center'>GAME OVER</br>Score: "+s.total+"\n</div>";
  if (printEndGame == true) {
	s.die();
  }
	
}
  
function clear() {
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0,0,600,600);
}

function postScores(){
    var form = document.createElement("form");
	form.setAttribute("method","post");
	form.setAttribute("action","submitScore.php");
	var hiddenField = document.createElement("input");
	hiddenField.setAttribute("type","hidden");
	hiddenField.setAttribute("name","score");
	hiddenField.setAttribute("value",s.total);
	form.appendChild(hiddenField);
	document.body.appendChild(form);
	form.submit();
}




