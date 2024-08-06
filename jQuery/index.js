// alert("Click me");

//this way is used when jQuery script is placed in the head section of HTML DOM, BUT NOT AT THE END OF THE BODY SECTION.
// $(document).ready(function () {
//   $("h1").css("color", "blue");
// });

// $("h1").addClass("big-title margin-50");

// console.log($("h1").css("color"));
// console.log($("h1").css("font-size"));

// jQuery("h1").css("color","red");
// $("h1").css("color", "blue");

$("h1").text("Bye");
// $("button").text("Don't click me");
$("button").html("<em>Don't click me</em>");

console.log($("img").attr("src"));

$("a").attr("href", "https://www.yahoo.com");

$("h1").click(function () {
  $("h1").css("color", "purple");
});

$("button").click(function () {
  $("button").css("color", "purple");
});

$("input").keypress(function (event) {
  console.log(event.key);
});

$(document).keypress(function (event) {
  $("h1").text(event.key);
});
