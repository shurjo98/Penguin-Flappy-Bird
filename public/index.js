var letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

var points = 0;



var aLetter;
var bLetter;
var cLetter;
var dLetter;
var eLetter;
var fLetter;
var gLetter;
var hLetter;


var userInterfaceEnable = true;


var birdLife = 3;

let hopimg = [];
let fallimg;
let grassimg;

let beeHopImg;

let beeImageArray = [];


let birdDieImg;

let madFlyHopImg;

let madFlyImageArray = [];


let bladeHopImg;
let bladeImageArray = [];

let ghostImgArray = [];
let ghostHopImg;

let batHopImg;
let batImageArray = [];

let bgCloudImg;

let bgCloudImg1;
let bgCloudImg2;
let bgCloudImg3;


var mySound;



// let bgCloudImg;

let keyBoardImg;
let downArrowImg;

var grassXs = [];
var sticks = [];

var blades = [];

var madFlies = [];
var bees = [];
var ghosts = [];
var bats = [];



var aLetters = [];
var bLetters = [];
var cLetters = [];
var dLetters = [];
var eLetters = [];
var fLetters = [];
var gLetters = [];
var hLetters = [];


var hearts = [];


let heartImg;

for (var i = 0; i < 25; i++) {
  blades.push(i * 200);
}


var pierreDead = false;
let hurtSound;
let aSound;
let bSound;
let cSound;
let dSound;
let eSound;
let fSound;
let gSound;
let hSound;



function preload() {

  hopimg.push(loadImage("images/Pierre/pierre.atlas/pierre-flying-2.png"));
  hopimg.push(loadImage("images/Pierre/pierre.atlas/pierre-flying-4.png"));
  hopimg.push(loadImage("images/Pierre/pierre.atlas/pierre-flying-3.png"));


  madFlyHopImg = loadImage("images/Enemies/mad_fly_1.png");
  madFlyImageArray.push(loadImage("images/Enemies/mad_fly_1.png"));
  madFlyImageArray.push(loadImage("images/Enemies/mad_fly_2.png"));
  madFlyImageArray.push(loadImage("images/Enemies/mad_fly_3.png"));
  madFlyImageArray.push(loadImage("images/Enemies/mad_fly_4.png"));
  madFlyImageArray.push(loadImage("images/Enemies/mad_fly_5.png"));
  madFlyImageArray.push(loadImage("images/Enemies/mad_fly_6.png"));
  madFlyImageArray.push(loadImage("images/Enemies/mad_fly_7.png"));
  madFlyImageArray.push(loadImage("images/Enemies/mad_fly_8.png"));





  birdDieImg = loadImage("images/Pierre/pierre.atlas/pierre-dead.png");

  beeHopImg = loadImage("images/Enemies/bee_1.png");
  beeImageArray.push(loadImage("images/Enemies/bee_1.png"));
  beeImageArray.push(loadImage("images/Enemies/bee_2.png"));
  beeImageArray.push(loadImage("images/Enemies/bee_3.png"));
  beeImageArray.push(loadImage("images/Enemies/bee_4.png"));
  beeImageArray.push(loadImage("images/Enemies/bee_5.png"));
  beeImageArray.push(loadImage("images/Enemies/bee_6.png"));



  batHopImg = loadImage("images/Enemies/bat_1.png");
  batImageArray.push(loadImage("images/Enemies/bat_1.png"));
  batImageArray.push(loadImage("images/Enemies/bat_2.png"));
  batImageArray.push(loadImage("images/Enemies/bat_3.png"));
  batImageArray.push(loadImage("images/Enemies/bat_4.png"));
  batImageArray.push(loadImage("images/Enemies/bat_5.png"));
  batImageArray.push(loadImage("images/Enemies/bat_6.png"));
  batImageArray.push(loadImage("images/Enemies/bat_7.png"));
  batImageArray.push(loadImage("images/Enemies/bat_8.png"));




  ghostHopImg = loadImage("images/Enemies/ghost_0.png");
  ghostImgArray.push(loadImage("images/Enemies/ghost_0.png"));
  ghostImgArray.push(loadImage("images/Enemies/ghost_1.png"));
  ghostImgArray.push(loadImage("images/Enemies/ghost_2.png"));
  ghostImgArray.push(loadImage("images/Enemies/ghost_3.png"));
  ghostImgArray.push(loadImage("images/Enemies/ghost_4.png"));
  ghostImgArray.push(loadImage("images/Enemies/ghost_5.png"));
  ghostImgArray.push(loadImage("images/Enemies/ghost_6.png"));
  ghostImgArray.push(loadImage("images/Enemies/ghost_7.png"));
  ghostImgArray.push(loadImage("images/Enemies/ghost_8.png"));



  fireBallImg = loadImage("images/fireball.png");
  downArrowImg = loadImage("images/down-arrow.png");

  fallimg = loadImage("images/Pierre/pierre.atlas/pierre-flying-1.png");
  grassimg = loadImage("images/Environment/ground.atlas/ice-tile.png");

  bladeHopImg = loadImage("images/Enemies/blade-1.png");

  bladeImageArray.push(loadImage("images/Enemies/blade-1.png"));
  bladeImageArray.push(loadImage("images/Enemies/blade-2.png"));


  bgCloudImg1 = loadImage("images/Backgrounds/Background-1.png");
  bgCloudImg2 = loadImage("images/Backgrounds/Background-2.png");
  bgCloudImg3 = loadImage("images/Backgrounds/Background-3.png");

  aLetter = loadImage("images/alphabetImages/a.png");
  bLetter = loadImage("images/alphabetImages/b.png");
  cLetter = loadImage("images/alphabetImages/c.png");
  dLetter = loadImage("images/alphabetImages/d.png");
  eLetter = loadImage("images/alphabetImages/e.png");
  fLetter = loadImage("images/alphabetImages/f.png");
  gLetter = loadImage("images/alphabetImages/g.png");
  hLetter = loadImage("images/alphabetImages/h.png");

  heartImg = loadImage("images/heart.png");

  mySound = loadSound('Sounds/BackgroundMusic.mp3');
  hurtSound = loadSound("Sounds/Hurt.mp3");

  aSound = loadSound("Sounds/a.mp3");
  bSound = loadSound("Sounds/b.mp3");
  cSound = loadSound("Sounds/c.mp3");
  dSound = loadSound("Sounds/d.mp3");
  eSound = loadSound("Sounds/e.mp3");
  fSound = loadSound("Sounds/f.mp3");
  gSound = loadSound("Sounds/g.mp3");
  hSound = loadSound("Sounds/h.mp3");

  keyBoardImg = loadImage("images/keyboard.png");


}




//fireBall

var FireBall = function(x, y) {
  this.x = x;
  this.y = y;
  this.img = fireBallImg;
};


FireBall.prototype.draw = function() {
  image(fireBallImg, this.x, this.y, 40, 40);
  this.x = this.x + random(-2, 2);
  this.y = this.y - 5;
};



//Alphabet

var Aletter = function(x, y) {
  this.x = x;
  this.y = y;
  this.img = aLetter;
};

Aletter.prototype.draw = function() {
  image(aLetter, this.x, this.y, 80, 80);
  // Jiggling randomly on the horizontal axis

  this.x = this.x + random(-2, 2);


};




var Bletter = function(x, y) {
  this.x = x;
  this.y = y;
  this.img = bLetter;
};

Bletter.prototype.draw = function() {
  image(bLetter, this.x, this.y, 80, 80);
  this.x = this.x + random(-2, 2);
};




var Cletter = function(x, y) {
  this.x = x;
  this.y = y;
  this.img = cLetter;
};

Cletter.prototype.draw = function() {
  image(cLetter, this.x, this.y, 80, 80);
  this.x = this.x + random(-2, 2);
};



var Dletter = function(x, y) {
  this.x = x;
  this.y = y;
  this.img = dLetter;
};

Dletter.prototype.draw = function() {
  image(dLetter, this.x, this.y, 80, 80);
  this.x = this.x + random(-2, 2);
};



var Eletter = function(x, y) {
  this.x = x;
  this.y = y;
  this.img = eLetter;
};

Eletter.prototype.draw = function() {
  image(eLetter, this.x, this.y, 80, 80);
  this.x = this.x + random(-2, 2);
};



var Fletter = function(x, y) {
  this.x = x;
  this.y = y;
  this.img = fLetter;
};

Fletter.prototype.draw = function() {
  image(fLetter, this.x, this.y, 80, 80);
  this.x = this.x + random(-2, 2);
};



var Gletter = function(x, y) {
  this.x = x;
  this.y = y;
  this.img = gLetter;
};

Gletter.prototype.draw = function() {
  image(gLetter, this.x, this.y, 80, 80);
  this.x = this.x + random(-2, 2);
};



var Hletter = function(x, y) {
  this.x = x;
  this.y = y;
  this.img = hLetter;
};

Hletter.prototype.draw = function() {
  image(hLetter, this.x, this.y, 80, 80);
  this.x = this.x + random(-2, 2);
};




//Bird


var Bird = function(x, y) {

  this.x = x;
  this.y = y;
  this.sticks = 0;
  this.img = hopimg;
};

Bird.prototype.hop = function() {
  this.y -= 5;
  this.img = hopimg[frameCount % hopimg.length];
};

Bird.prototype.fall = function() {
  this.y += 5;
  this.img = fallimg;

};

Bird.prototype.detectCollision = function(stick) {
  if ((stick.x > this.x && stick.x < (this.x + 120)) && ((stick.y > this.y && stick.y < this.y + 120))) {

    hurtSound.play();
    this.y += 100;
    this.y = constrain(this.y, 0, height - 80);
    birdLife -= 1;
  }



};


Bird.prototype.detectAlphabetA = function(stick) {
  if ((stick.x > this.x && stick.x < (this.x + 80)) && ((stick.y > this.y && stick.y < this.y + 80))) {
    stick.y -= 1000;

    if (aSound.isPlaying()) {
      // .isPlaying() returns a boolean
      aSound.stop();

    } else {
      aSound.play();

    }

    points += 1;
  }

};


Bird.prototype.detectAlphabetB = function(stick) {
  if ((stick.x > this.x && stick.x < (this.x + 80)) && ((stick.y > this.y && stick.y < this.y + 80))) {
    stick.y -= 1000;

    if (bSound.isPlaying()) {
      // .isPlaying() returns a boolean
      bSound.stop();

    } else {
      bSound.play();

    }

    points += 1;
  }

};

Bird.prototype.detectAlphabetC = function(stick) {
  if ((stick.x > this.x && stick.x < (this.x + 80)) && ((stick.y > this.y && stick.y < this.y + 80))) {
    stick.y -= 1000;

    if (cSound.isPlaying()) {
      // .isPlaying() returns a boolean
      cSound.stop();

    } else {
      cSound.play();

    }

    points += 1;
  }

};


Bird.prototype.detectAlphabetD = function(stick) {
  if ((stick.x > this.x && stick.x < (this.x + 80)) && ((stick.y > this.y && stick.y < this.y + 80))) {
    stick.y -= 1000;

    if (dSound.isPlaying()) {
      // .isPlaying() returns a boolean
      dSound.stop();

    } else {
      dSound.play();

    }

    points += 1;
  }

};


Bird.prototype.detectAlphabetE = function(stick) {
  if ((stick.x > this.x && stick.x < (this.x + 80)) && ((stick.y > this.y && stick.y < this.y + 80))) {
    stick.y -= 1000;

    if (eSound.isPlaying()) {
      // .isPlaying() returns a boolean
      eSound.stop();

    } else {
      eSound.play();

    }
    points += 1;
  }

};


Bird.prototype.detectAlphabetF = function(stick) {
  if ((stick.x > this.x && stick.x < (this.x + 80)) && ((stick.y > this.y && stick.y < this.y + 80))) {
    stick.y -= 1000;

    if (fSound.isPlaying()) {
      // .isPlaying() returns a boolean
      fSound.stop();

    } else {
      fSound.play();

    }
    points += 1;
  }

};


Bird.prototype.detectAlphabetG = function(stick) {
  if ((stick.x > this.x && stick.x < (this.x + 80)) && ((stick.y > this.y && stick.y < this.y + 80))) {
    stick.y -= 1000;

    if (gSound.isPlaying()) {
      // .isPlaying() returns a boolean
      gSound.stop();

    } else {
      gSound.play();

    }
    points += 1;
  }

};


Bird.prototype.detectAlphabetH = function(stick) {
  if ((stick.x > this.x && stick.x < (this.x + 80)) && ((stick.y > this.y && stick.y < this.y + 80))) {
    stick.y -= 1000;

    if (hSound.isPlaying()) {
      // .isPlaying() returns a boolean
      hSound.stop();

    } else {
      hSound.play();

    }
    points += 1;
  }

};





Bird.prototype.draw = function() {
  this.y = constrain(this.y, 0, height - 150);
  if (this.y === height - 150) {

  }
  image(this.img, this.x, this.y, 160, 160);
};


Bird.prototype.die = function() {

  this.y = constrain(this.y, 0, height - 100);
  this.img = birdDieImg;
  image(birdDieImg, this.x, this.y, 160, 160);
  this.y += 2;

};



// Bee

var Bee = function(x, y) {
  this.x = x;
  this.y = y;
  this.img = beeHopImg;
};


Bee.prototype.fly = function() {
  this.img = beeImageArray[frameCount % beeImageArray.length];
};


Bee.prototype.draw = function() {

  image(this.img, this.x, this.y, 100, 100);
};


var bee = new Bee(200, 250);




// Mad-fly

var Madfly = function(x, y) {

  this.x = x;
  this.y = y;
  this.img = madFlyHopImg;

};



Madfly.prototype.fly = function() {

  this.img = madFlyImageArray[frameCount % madFlyImageArray.length];
};


Madfly.prototype.draw = function() {
  image(this.img, this.x, this.y, 120, 120);
};


var madFly = new Madfly(300, 300);



//Bat

var Bat = function(x, y) {
  this.x = x;
  this.y = y;
  this.img = batHopImg;
};



Bat.prototype.fly = function() {

  this.img = batImageArray[frameCount % batImageArray.length];
};


Bat.prototype.draw = function() {
  image(this.img, this.x, this.y, 140, 140);
};


var bat = new Bat(100, 200);




//Ghost

var Ghost = function(x, y) {
  this.x = x;
  this.y = y;
  this.img = ghostHopImg;
};


Ghost.prototype.fly = function() {

  this.img = ghostImgArray[frameCount % ghostImgArray.length];
};

Ghost.prototype.draw = function() {
  image(this.img, this.x, this.y, 120, 120);
};

var ghost = new Ghost(100, 250);









//Sticks

var Stick = function(x, y) {
  this.x = x;
  this.y = y;
};

Stick.prototype.draw = function() {
  fill(139, 69, 19);
  rect(this.x, this.y, 5, 40);
};




var littleBird = new Bird(300, 200);


// Health

var Health = function(x, y) {
  this.x = x;
  this.y = y;
  this.img = heartImg;

};

Health.prototype.draw = function() {
  image(heartImg, this.x, this.y, 40, 40);
};



let button = {
  w: 50,
  h: 50
};

let pressed = false;
let count = 0;



function setup() {
  frameRate(30);
  bgCloudImg = loadImage("images/Backgrounds/Background-4.png");

  var canvas = createCanvas(windowWidth, windowHeight);;
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < windowWidth; i++) {
    grassXs.push(i * 20);
  }









}



var currentScene = 1;

function drawScene2() {
  background(200);
  background(bgCloudImg);


  background(bgCloudImg3);
  background(bgCloudImg2);
  background(bgCloudImg1);




  for (var i = 0; i < grassXs.length; i++) {
    image(grassimg, grassXs[i], height * 0.97, windowWidth, 80);
    if (birdLife != 0) {
      grassXs[i] -= 5;
    }

    if (grassXs[i] < -windowWidth) {
      grassXs[i] = windowWidth;
    }
  }


  for (var i = 0; i < blades.length; i++) {
    image(bladeHopImg, blades[i], height * 0.93, 80, 80);
    littleBird.detectCollision(blades[i]);
    if (birdLife != 0) {
      blades[i] -= 5;
    }

    if (blades[i] < -200) {
      blades[i] = width;
    }
  }



  for (var i = 0; i < birdLife; i++) {
    hearts.push(new Health(10 + (i * 50), 10));
    hearts[i].draw();
  }

  // for (var i = 0; i < 40; i++) {
  //   sticks.push(new Stick(100 * i, random(30, 260)));
  //   sticks[i].draw();
  //   littleBird.detectCollision(sticks[i])
  //
  //   sticks[i].x -= 1;
  //
  // }

  for (var i = 0; i < 15; i++) {
    bees.push(new Bee(random(1000, 31000), random(60, windowHeight - 300)));

    bees[i].fly();
    bees[i].draw();
    littleBird.detectCollision(bees[i]);
    if (birdLife != 0) {

      bees[i].x -= 5;
    }
  }


  for (var i = 0; i < 15; i++) {
    madFlies.push(new Madfly(random(1000, 31000), random(60, windowHeight - 300)));


    madFlies[i].fly();
    madFlies[i].draw();
    littleBird.detectCollision(madFlies[i]);
    if (birdLife != 0) {
      madFlies[i].x -= 5;
    }
  }



  for (var i = 0; i < 15; i++) {
    ghosts.push(new Ghost(random(1000, 31000), random(60, windowHeight - 300)));
    ghosts[i].fly();
    ghosts[i].draw();
    littleBird.detectCollision(ghosts[i]);
    if (birdLife != 0) {
      ghosts[i].x -= 5;
    }
  }


  for (var i = 0; i < 15; i++) {
    bats.push(new Bat(random(1000, 31000), random(60, windowHeight - 300)));
    bats[i].fly();
    bats[i].draw();

    littleBird.detectCollision(bats[i]);
    if (birdLife != 0) {
      bats[i].x -= 5;
    }
  }


  for (var i = 0; i < 5; i++) {
    aLetters.push(new Aletter(random(1000, 4000), random(60, windowHeight - 100)));

    aLetters[i].draw();

    littleBird.detectAlphabetA(aLetters[i]);
    if (birdLife != 0) {


      aLetters[i].x -= 5;

    }
  }

  for (var i = 0; i < 5; i++) {
    bLetters.push(new Bletter(random(5000, 8000), random(60, windowHeight - 100)));
    bLetters[i].draw();
    littleBird.detectAlphabetB(bLetters[i]);
    if (birdLife != 0) {


      bLetters[i].x -= 5;

    }
  }

  for (var i = 0; i < 5; i++) {
    cLetters.push(new Cletter(random(9000, 12000), random(60, windowHeight - 100)));
    cLetters[i].draw();
    littleBird.detectAlphabetC(cLetters[i]);
    if (birdLife != 0) {


      cLetters[i].x -= 5;

    }
  }

  for (var i = 0; i < 5; i++) {
    dLetters.push(new Dletter(random(13000, 16000), random(60, windowHeight - 100)));
    dLetters[i].draw();
    littleBird.detectAlphabetD(dLetters[i]);
    if (birdLife != 0) {


      dLetters[i].x -= 5;

    }
  }

  for (var i = 0; i < 5; i++) {
    eLetters.push(new Eletter(random(17000, 20000), random(60, windowHeight - 100)));
    eLetters[i].draw();
    littleBird.detectAlphabetE(eLetters[i]);
    if (birdLife != 0) {


      eLetters[i].x -= 5;

    }
  }

  for (var i = 0; i < 5; i++) {
    fLetters.push(new Fletter(random(21000, 24000), random(60, windowHeight - 100)));
    fLetters[i].draw();
    littleBird.detectAlphabetF(fLetters[i]);
    if (birdLife != 0) {


      fLetters[i].x -= 5;

    }
  }

  for (var i = 0; i < 5; i++) {
    gLetters.push(new Gletter(random(25000, 27000), random(60, windowHeight - 100)));
    gLetters[i].draw();
    littleBird.detectAlphabetG(gLetters[i]);
    if (birdLife != 0) {


      gLetters[i].x -= 5;

    }
  }


  for (var i = 0; i < 5; i++) {
    hLetters.push(new Hletter(random(28000, 31000), random(60, windowHeight - 100)));
    hLetters[i].draw();
    littleBird.detectAlphabetH(hLetters[i]);
    if (birdLife != 0) {


      hLetters[i].x -= 5;

    }

    if (points < 20 && littleBird.x === hLetters[hLetters.length - 1].x) {
      userInterfaceEnable = false;
      littleBird.die();
      textSize(40);
      text("Game Over!", windowWidth / 2, windowHeight / 2);
      setTimeout(function() {

        noLoop();


      }, 5000);
    } else if (points >= 20 && littleBird.x === hLetters[hLetters.length - 1].x) {
      userInterfaceEnable = false;
      textAlign("CENTER");
      fill(0, 0, 155);
      textSize(40);
      text("Congratulations! You scored: " + points, windowWidth / 2, windowHeight / 2);
      noLoop();
    }


  }









  if (userInterfaceEnable === true) {

    if (keyIsPressed && keyCode === 32 || mouseIsPressed && mouseButton === LEFT || canvas.touchStarted) {
      littleBird.hop();
    } else {

      littleBird.fall();
    }
  }

  littleBird.draw();

  if (birdLife === 0) {

    userInterfaceEnable = false;
    littleBird.die();
    textSize(40);
    text("Game Over!", windowWidth / 2, windowHeight / 2);
    setTimeout(function() {

      noLoop();


    }, 5000);
  }

  textSize(40);
  fill(0, 0, 128);
  text("Score: " + points + "/40", windowWidth / 2, 40);


}


function drawScene1() {
  //draw a button
  noStroke();
  fill(0);
  rectMode(CENTER);
  rect(width / 2, height / 2, button.w, button.h);
  push();
  fill(255);
  triangle(width / 2 - 5, height / 2 - 10, width / 2 + 10, height / 2, width / 2 - 5, height / 2 + 10);
  pop();

  //   //button flickers
  //   offset=offset+speed
  //   if (offset>=0 && offset<=5) {
  //     speed=1
  //   }
  //   else {
  //     speed=speed*-1
  //   }

  //if mouse is over the button, button pops
  if (mouseX > width / 2 - button.w / 2 && mouseX < width / 2 + button.w / 2 && mouseY > height / 2 - button.h / 2 && mouseY < height / 2 + button.h / 2) {
    rect(width / 2, height / 2, button.w + 15, button.h + 15);
    push();
    fill(255);
    triangle(width / 2 - 10, height / 2 - 15, width / 2 + 15, height / 2, width / 2 - 10, height / 2 + 15);
    pop();
  }

  //if button is pressed, button disappears and pattern shows
  if (mouseIsPressed) {
    if (mouseX > width / 2 - button.w / 2 && mouseX < width / 2 + button.w / 2 && mouseY > height / 2 - button.h / 2 && mouseY < height / 2 + button.h / 2) {
      userStartAudio();
      mySound.loop();


      var x = width / 2;
      var y = height / 2;

      stroke(0);
      noFill();

      pressed = true;
      currentScene = 2;


    }
  }
}


function draw() {
  if (currentScene === 1) {
    drawScene1();
  } else if (currentScene === 2) {
    drawScene2();

  }



}
