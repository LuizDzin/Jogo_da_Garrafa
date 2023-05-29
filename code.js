hideElement("Left");
hideElement("Right");
hideElement("Top");
hideElement("Bottom");
onEvent("button1", "click", function() {
  if (getNumber("text_input1") == 2) {
    timedLoop(200, function() {
      hideElement("Left");
      hideElement("Right");
      var x = randomNumber(1, 10);
      if (x > 5) {
        showElement("Right");
      }
      if (x < 5) {
        showElement("Left");
      }
    });
    timedLoop(10000, function() {
      stopTimedLoop();
    });
  }
  if (getNumber("text_input1") == 4) {
    timedLoop(200, function() {
      hideElement("Left");
      hideElement("Right");
      hideElement("Top");
      hideElement("Bottom");
      var x = randomNumber(1,100);
      if (x < 25) {
        showElement("Top");
      }
      if (x > 25 && x < 50) {
        showElement("Right");
      }
      if (x > 50 && x < 75) {
        showElement("Bottom");
      }
      if (x > 75) {
        showElement("Left");
      }
    });
    timedLoop(10000, function() {
      stopTimedLoop();
    });
  }
});
