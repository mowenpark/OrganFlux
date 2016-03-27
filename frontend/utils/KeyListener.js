var KeyAction = require('../actions/KeyAction.js');


$(document).on("keyup", function(e) {
  e.preventDefault();
  var mappedKey = mapping[e.keyCode];
  KeyAction.keyReleased(mappedKey);
  // debugger;
});

$(document).on("keydown", function(e) {
  e.preventDefault();
  var mappedKey = mapping[e.keyCode];
  KeyAction.keyPressed(mappedKey);
  // debugger;
});

var mapping = {
  65: "C3",
  83: "D3",
  68: "E3",
  70: "F3",
  71: "G3",
  72: "A3",
  74: "B3",
  75: "C4",
};
