import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      currentText: ''
    };
  }

  changeHandler = (event) => {
    this.setState({
      currentText: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.currentText} onChange={this.changeHandler}/>
        <p>{this.props.maxChars - this.state.currentText.length} characters left</p>
      </div>
    );
  }
}

export default TwitterMessage;
