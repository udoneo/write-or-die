var React = require('react');
var transparentBg = require('../styles').transparentBg;
var textAreaStyle = require('../styles').textAreaStyle;
var TextInput = require('../components/TextInput');

var  max_chars = 100;
var seconds = 0;

var TextInputContainer = React.createClass({
    getInitialState: function() {
        	return {
            	charCount: 0,
                wordCount: 0,
                time: 0
            };
        },
        timer() {
            this.setState({
            	time: this.state.time+1
            });
        },
        handleChange(event) {
        	var input = event.target.value;
            this.setState({
            	charCount: input.length
            });
            if (input.length > 0) { /*Prob a better way to do this*/
            this.setState({
            	wordCount: input.match(/\w+/g).length
            });
        } else {
            this.setState({
            	wordCount: 0
            });
        }
        },
  render: function () {
    return (
        <div>
      <TextInput charCount={this.state.charCount}
        handleChange={this.handleChange}
        wordCount={this.state.wordCount}
        timer={this.state.time}>

      </TextInput>
      {/*this.state.charCount > 0 ? setInterval(this.timer, 1000) : null trying
          to make timer when the user starts typing*/}
      </div>


    )
  }
});

module.exports = TextInputContainer;

/*Container that handles the state.
Char charCount
Also make word counter and timer
- Word counter: http://stackoverflow.com/questions/18679576/counting-words-in-string
Make avg speed in word/minute*/
