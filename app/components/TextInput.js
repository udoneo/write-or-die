var React = require('react');
var transparentBg = require('../styles').transparentBg;
var textAreaStyle = require('../styles').textAreaStyle;
var titleTextAreaStyle = require('../styles').titleTextAreaStyle;

var TextInput = React.createClass({
  render: function () {
    return (
      <div className='jumbotron col-sm-12 text-center' style={transparentBg}>
        <h1>Write or Die.</h1>
        <p className='lead'>Vomit all your content out!</p>
        <br></br>
        <textarea onChange={this.props.handleChange} placeholder="Write here..." style={textAreaStyle}></textarea>
        <br></br>
        <p> Characters typed: {this.props.charCount}</p>
        <p> Words: {this.props.wordCount}</p>
        <p> Time: {this.props.timer}</p>
        <br></br>
        <button type='button' className='btn btn-lg btn-success'>Save</button>
      </div>
    )
  }
});

module.exports = TextInput;

/*Component without state.*/
