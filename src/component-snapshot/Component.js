import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  render() {
    return (
      <div className='toggle' onClick={() => this.setState({ counter: this.state.counter + 1 })}>{this.state.counter}{this.props.children}</div>
    );
  }
}

export default MyComponent;