// Set our number counter to 120 seconds.
var number = 10;

// Variable that will hold our interval ID when we execute the "run" function
var intervalId;

// When the resume button gets clicked, execute the run function.
$("#start").on("click", run);

// The run function sets an interval that runs the decrement function once a second.
// And add the questions to the page.
function run() {
  // Add the questions to the page.
  $("#q1").text("This is a test for question one.");

  $("#q2").text("This is a test for question two.");

  $("#q3").text("This is a test for question three.");

  $("#q4").text("This is a test for question four.");

  // Decrement the timer. 
  intervalId = setInterval(decrement, 1000);
}

// The decrement function.
function decrement() {
  //  Decrease number by one.
  number--;

  // Show the number in the #show-number tag.
  $("#time-left").html("<h3>" + number + " Seconds Remaing</h3>");

  // Once number hits zero...
  if (number === 0) {
    //  ...run the stop function.
    stop();

  }
}

//  The stop function
function stop() {
  //  Clears our intervalId
  clearInterval(intervalId);

  // Clear all the questions from the screen then display results.
  $("#questions").text("test");
}