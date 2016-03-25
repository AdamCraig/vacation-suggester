$(document).ready(function() {
  $("form#destination-quiz").submit(function(event) {
    event.preventDefault();

    $("#destination-quiz").slideUp();
    $("#prompt").slideUp();
    $("#dog-loading").slideDown().delay(2000).slideUp();
    $("#restartQuiz").delay(2000).slideDown();
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
      $("#destination1").delay(2000).slideDown();
    } else if (totalScore <= 10) {
      $("#destination2").delay(2000).slideDown();
    } else if (totalScore <= 13) {
      $("#destination3").delay(2000).slideDown();
    } else if (totalScore <= 16) {
      $("#destination4").delay(2000).slideDown();
    } else {
      $("#destination5").delay(2000).slideDown();
    }

  });

  $("form#restartQuiz").submit(function(event) {
    event.preventDefault();

    location.reload();
  });

});
