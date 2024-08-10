

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var gameStarted = false;

var level = 0;

// Listens for a keydown in the website and starts the game
$(document).on("keydown", function () { 
  if (!gameStarted) {
    $("h1").text("Level " + level);
    gameStarted = true;
    nextSequence();
  }
});

// Listens for a click on a button, when this happens then the audio respectively is played and animates a press.
$(".btn").on("click", function() {
  // var userChosenColour = this.id;
  var userChosenColour = $(this).attr("id")

  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1); 
});


function checkAnswer(currentLevel) {
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("succes");

    if (gamePattern.length === userClickedPattern.length) {


      setTimeout(function() {
        nextSequence();
      }, 1000);

    }
  } else {
    console.log("wrong");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  gameStarted = false;
}

// Function to generate a sequence for the simon game
function nextSequence() {
  userClickedPattern = [];

  level++;
  $("h1").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 3);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);


  var button = $("#" + randomChosenColour);
  button.fadeIn(100);
  button.fadeOut(100);
  button.fadeIn(100);
  
  playSound(randomChosenColour);
}

// Function that play a sound from the sounds directory
function playSound(name) {
  var audio = new Audio("./sounds/" + name + ".mp3");
  audio.play();
}

// Functions that takes in a color and adds that respective button the pressed class
function animatePress(currentColour) {
  $("." + currentColour).addClass("pressed");
  setTimeout(function () {
    $("." + currentColour).removeClass("pressed");
  }, 100);
}






// nextSequence();