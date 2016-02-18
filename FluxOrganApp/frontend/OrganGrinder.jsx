require('./utils/KeyListener');

var React = require('react'),
    ReactDOM = require('react-dom'),
    ApplicationDispatcher = require('./dispatcher/dispatcher'),
    Note = require('./utils/Note'),
    MyStore = require('./stores/KeyStore'),
    Key = require('./components/Key'),
    Organ = require('./components/organ');


document.addEventListener("DOMContentLoaded", function () {
  var content = document.querySelector('.content');
  ReactDOM.render(<Organ />, content);
});
