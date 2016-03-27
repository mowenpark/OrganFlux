var AppDispatcher = require("../dispatcher/dispatcher"),
    Store = require("flux/utils").Store;

var KeyStore = new Store(AppDispatcher);

var _keys = [];

function addKey (key) {
  _keys.push(key);
}

function removeKey (key) {
  var idx = _keys.indexOf(key);
  _keys.splice(key, 1);
}

KeyStore.all = function () {

  return _keys.slice();
},

KeyStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case "KEY_PRESSED":
      addKey(payload.key);
      KeyStore.__emitChange();
      break;
    case "KEY_RELEASED":
      removeKey(payload.key);
      KeyStore.__emitChange();
      break;
  }

};

module.exports = KeyStore;
