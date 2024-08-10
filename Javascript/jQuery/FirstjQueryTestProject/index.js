// Styles
$("h1").css("color", "red");


// Add class
$("h1").addClass("big-title margin-50");


// Change text or html
$("h1").html("<i>bye</i>");

// $("h1").text("bye");

// Attributes
$("a").attr("href", "https://yahoo.com");

// Add event listener
$("h1").click(function() {
  $("h1").css("color", "purple");
});

$("button").click(function () { 
  $("h1").css("color", "green");
});

$(document).keypress(function (e) { 
  $("h1").text(e.key);
});

$("h1").on("mouseover", function() {
  $("h1").css("color", "yellow");
});

// Add html elements to the file
$("h1").before("<button>New</button>");
$("h1").after("<button>New too</button>");
$("h1").prepend("<button>Left</button>");
$("h1").append("<button>Right</button>");
// $("button").remove();


// Hide and show an html element
$("button").on("click", function () {
  $("h1").hide();
  setTimeout(function() {
    $("h1").show();
  }, 500)
});


// Animate and chain jquery methods

$("button").on("click", function () {
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
