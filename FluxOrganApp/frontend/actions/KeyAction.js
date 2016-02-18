var AppDispatcher = require('../dispatcher/dispatcher.js');

var KeyAction = {

  keyPressed: function (mappedKey) {

    AppDispatcher.dispatch({
      actionType: "KEY_PRESSED",
      key: mappedKey
    });
  },

  keyReleased: function (mappedKey) {
    AppDispatcher.dispatch({
      actionType: "KEY_RELEASED",
      key: mappedKey
    });
  }
};

module.exports = KeyAction;
