var meteors = [];  //telling the script that meteors is an empty array

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);

  ellipseMode(RADIUS);

  colorMode(HSB);

  for(var i = 0; i < 300; i++){
    meteors.push(new Meteor());
  }
}

//resource heavy
function draw(){
  background(color(0,0.3));

  for(var i = 0; i < meteors.length; i++){  //loop through each meteor in array to move/display individually
     meteors[i].move();
     meteors[i].display(); //for each meteor within array, accessing move and display method in Meteor
  }
}

//capital M because this is the name of our object(class)
function Meteor(){
  this.size = random(3);
  this.color = color(89,73,232);
  this.speed = random(10);

  this.x = -random(width);
  this.y = -random(height);

  this.move = function(){
    this.x += random(7);
    this.y += this.size;

    if(this.x > width || this.y > height){
      this.x = -random(width);
      this.y = -random(height);
    }
  }

  this.display = function(){
    fill(this.color);
    ellipse(this.x,this.y,this.size,this.size);
  }
}
