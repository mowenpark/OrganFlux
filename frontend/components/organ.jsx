var React = require('react');
var Tone = require('../constants/Tones');
var Key = require('./Key');

var Organ = React.createClass({

  render: function() {
    var keyItems = Object.keys(Tone).map (function (val, idx) {
      return <Key noteName={val} key={idx} />;
    });
    return( <div>
      {keyItems}
    </div>);
  }

});

module.exports = Organ;
