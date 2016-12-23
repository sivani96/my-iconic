import React, { Component } from 'react';
import './App.css';
import IconApp from './IconApp';

class App extends Component {
  constructor() {
    // In a constructor, call `super` first if the class extends another class
    super();

    // Initialize state in the constructor; this is the only place you
    // can set the state directly without using this.setState
    this.state = { text:'' };
    this.updateText=this.updateText.bind(this);
    this.focus=this.focus.bind(this);
    // This binding is necessary to make `this` work in the callback

  }

  updateText(e)
  {
    const val=e.currentTarget.value;
    this.setState({text:val});
  }

  focus(){
    this.textInput.focus();
  }

  render() {

    return (
		
      <div className="App">
	  welcome!
      <textarea className="form-control"
        value={this.state.text}
        onChange={this.updateText}
        ref={el=> el && el.focus()}/>
	  <p>{this.state.text}</p>
      <IconApp text={this.state.text} number="10"/>
      <IconApp text={this.state.text} number="10"/>
      </div>
    );
  }
}

export default App;

