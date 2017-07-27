$(document).ready(function() {
  // Set our variables for out timer.
  var timer = 90, intervalId;
  // Variable to check if it's the first time rendering a question to start timer.
  var firstRender = true;

  // Variables for tracking our questions and answers.
  var questionIndex = 0, totalQuestions = 6,
    correct = 0;

  // Create arrays of Questions.
  var questions = [
    ["What is the newest version of HTML being developed?", "HTML3", "HTML4", "HTML5", 
      "There's only one HTML", "C"],
    ["What is one of the reasons Java is different to Javascript?", 
      "Java is compiled before it runs and isn't limited to being on a web browser", 
      "Javascript is barely used anymore", "Java is short for javascript", 
      "Javascript is compiled before it runs and isn't limited to being on a web browser", "A"],
    ["What does CSS stand for?", "Complex Style Sheet", "Complete Sound Sheet", 
      "Cascading Style Sheet", "Complete Style Sheet", "C"],
    ["What symbol indicates a tag in HTML?", "Exclamation Mark e.g. !", 
      "Angle Brackets e.g. <,>", "Commas e.g. ,", "Curly Brackets e.g. {,}", "B"],
    ["What does HTML stand for?", "Hyper Tag Markup Language", "Hyperlinking Text Marking Language", 
      "Hyperlinks Text Mark Language", "Hyper Text Markup Language", "D"],
    ["What is the most widely used language for web pages", "CSS", "HTML", "Python", "C#", "B"]
  ];

  // #############################################################################################
  // #################### Start of Game ##########################################################
  // #############################################################################################

  // When the start button gets clicked, execute the checkAnswer function.
  $("#start").on("click", renderQuestion);

  // The renderQuestion function sets an interval that runs the decrement function once a second.
  // And adds the questions to the page.
  function renderQuestion() {
    // Get rid of the start button to clean up the page.
    $("#start").hide();

    // Check if we've finished the trivia game.
    if (questionIndex >= questions.length) {
      //  If it's the final question, clears our intervalId and informs user they finished.
      clearInterval(intervalId);
      $("#question").html("You Finished!<br>");
      $("#question").append("You got " + correct + " questions right!");

      $("#submit").hide();
      $("#status").hide();
    } else {
      // Add the question to the page.
      $("#status").html("<h4>Question " + (questionIndex+1) + " of " + questions.length + "<h4/>");

      var question = questions[questionIndex][0];
      var chA = questions[questionIndex][1];
      var chB = questions[questionIndex][2];
      var chC = questions[questionIndex][3];
      var chD = questions[questionIndex][4];
      // Render the question to the page.
      $("#question").html(question + "<br>");
      $("#question").append("<input type='radio' name='choices' value='A'> " + chA + "<br>");
      $("#question").append("<input type='radio' name='choices' value='B'> " + chB + "<br>");
      $("#question").append("<input type='radio' name='choices' value='C'> " + chC + "<br>");
      $("#question").append("<input type='radio' name='choices' value='D'> " + chD + "<br>");

      // Add the submit button and have it checkAnswer when clicked.
      $("#submitBtn").html("<button id='submit' type='button'>Submit</button>");
      $("#submit").on("click", checkAnswer);
    }

    // Start decrementing the timer if it's the first time loading a qeustion.
    if (firstRender === true) {
      intervalId = setInterval(decrement, 1000);
      firstRender = false;
    }
  }

  // The decrement function.
  function decrement() {
    //  Decrease timer by one.
    timer--;
    // Show the timer in the #show-timer tag.
    $("#time-left").html("<h3>" + timer + " Seconds Remaing</h3>");

    // Check if timer hit zero.
    if (timer === 0) {
      //  Clears our intervalId and informs user time is up.
      clearInterval(intervalId);
      $("#question").html("Time's Up!<br>");
      $("#question").append("You got " + correct + " questions right!");
      
      $("#submit").hide();
      $("#status").hide();
    }
  }

  //  The checkAnswer function
  function checkAnswer() {
    // Check if correct answer was given and incremement correct.
    var radios = document.getElementsByTagName('input');
    var value;
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].type === 'radio' && radios[i].checked) {
        // get value, set checked flag or do whatever you need to
        value = radios[i].value;       
      }
    }
    if (value == questions[questionIndex][5]) {
      correct += 1 ;
      console.log(correct);
    }
    // Increment the questionIndex.
    questionIndex++;
    // Move on to next question.
    renderQuestion();
  }
});