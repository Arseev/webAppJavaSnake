// Web Application Development
// Final Project
// Adam Seevers
// This file contains the snake object and all attributes associated with it.



function Snake() {
  this.x = 20;
  this.y = 20;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 1;
  this.tail = [];
    
  
  
  // Check to see if the snake has met a block to eat and increase snake length
  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d >= 1) {
      return false;
    } else {
      this.total++;
      var sc=document.querySelector("#score");
      sc.innerHTML="Score: "+this.total;
      return true;
    }
  }

  this.dir = function(x , y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  this.update = function() {

    if (this.total !== this.tail.length) {
      for (var i = 0; i < this.tail.length-1; i++) {
        this.tail[i] = this.tail[i+1];
      }
    }

    this.tail[this.total-1] = createVector(this.x, this.y);

    for (var j = 0; j < this.total-1; j++) {
      this.tail[j] = this.tail[j+1];
    }
    this.tail[this.total-1] = createVector(this.x,this.y);


    this.x = this.x + this.xspeed*scl;
    this.y = this.y + this.yspeed*scl;

    this.x = constrain(this.x, 0, width-scl);
    this.y = constrain(this.y, 0, height-scl);


  }

  // displays the snake as it increases in size
  this.show = function() {
    fill(0,150,0);
    for (var i = 0; i < this.tail.length-1; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl)
    }
    rect(this.x, this.y, scl, scl);

  }

  //snake dies when it hits a wall or itself.
  this.die = function() {
	this.total = 1;
	this.tail = [];	
	this.xspeed = 0;
	this.yspeed = 0;
	this.x = 300;
	this.y = 300;
  }
  
  
}