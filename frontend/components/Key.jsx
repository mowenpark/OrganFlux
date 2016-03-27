var React = require('react');
var Note = require('../utils/Note');
var Tone = require('../constants/Tones');
var KeyStore = require('../stores/KeyStore');

var keys = KeyStore.all();

var Key = React.createClass({

  _keysChanged: function () {



    if (keys.indexOf(this.props.noteName) > -1) {
      this.note.start();
    } else {
      this.note.stop();
    }

  },

  componentDidMount: function () {
    this.note = new Note (Tone[this.props.noteName]);
    this.changeToken = KeyStore.addListener(this._keysChanged);
  },

  componentWillUnmount: function () {
    this.changeToken.remove();
  },

  render: function () {
    var sty;
    if (keys.indexOf(this.props.noteName) > -1) {
      sty = "{font-weight: bold}";
    } else {
      sty = "{font-weight: normal}";
    }
    return(
      if (keys.indexOf(this.props.noteName) > -1) {
        <div style={font-weight: bold}>{this.props.noteName}</div>
      } else {
        <div style={font-weight: normal}>{this.props.noteName}</div>

      }

    );
  }

});

module.exports = Key;
