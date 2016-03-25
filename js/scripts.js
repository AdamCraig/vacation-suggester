$(document).ready(function() {
  $("form#destination-quiz").submit(function(event) {
    event.preventDefault();


    $("#destination-quiz").slideUp();
    $("#dog-loading").slideDown().delay('slow').slideUp();
    $("#restartQuiz").show();
    $("#destination1").hide();
    $("#destination2").hide();
    $("#destination3").hide();
    $("#destination4").hide();
    $("#destination5").hide();

    var quest1score = parseInt($("input:radio[name=quest1]:checked").val());
    var quest2score = parseInt($("input:radio[name=quest2]:checked").val());
    var quest3score = parseInt($("input:radio[name=quest3]:checked").val());
    var quest4score = parseInt($("input:radio[name=quest4]:checked").val());
    var quest5score = parseInt($("input:radio[name=quest5]:checked").val());

    var totalScore = quest1score + quest2score + quest3score + quest4score + quest5score;

    if (totalScore <= 7) {
      $("#destination1").show();
    } else if (totalScore <= 10) {
      $("#destination2").show();
    } else if (totalScore <= 13) {
      $("#destination3").show();
    } else if (totalScore <= 16) {
      $("#destination4").show();
    } else {
      $("#destination5").show();
    }

  });

  $("form#restartQuiz").submit(function(event) {
    event.preventDefault();

    $("#destination-quiz").show();
    $("#restartQuiz").hide();
    $("#destination1").hide();
    $("#destination2").hide();
    $("#destination3").hide();
    $("#destination4").hide();
    $("#destination5").hide();
  });

});
