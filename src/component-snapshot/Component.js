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
      <div
        className='toggle'
        onClick={() => this.setState({ counter: this.state.counter + 1 })}
        style={{
          fontSize: 70,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          userSelect: 'none',
          cursor: 'pointer',
          fontFamily: 'sans-serif'
        }}
      >
        <div className="child">{this.state.counter}</div>
        {this.props.children}
      </div>
    );
  }
}

export default MyComponent;