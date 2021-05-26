import "./App.css";
import React, { Component } from "react";
import Section from "./components/Section";
import Header from "./components/Head";
import List from "./components/List";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      id: [],
      text: [],
      disabled: false
    };
  }

  handleChange(event) {
  // Check for input id, if new push id and text, else setState
    const indexOfId = this.state.id.findIndex(
      (item) => item === event.target.id
    );
    if (indexOfId !== -1) {
      this.setState((prevState) => {
        prevState.text[indexOfId] = event.target.value;
        return prevState;
      });
    } else {
      this.setState((prevState) => {
        prevState.id.push(event.target.id);
        prevState.text.push(event.target.value);
        return prevState;
      });
    }
  }

  handleSubmit(e) {
    this.setState( prevState => {
      prevState.disabled = !prevState.disabled
      return prevState
    })
  }
  render() {
    return (
      <form >
        <div className="App">
          <Section
            key="0"
            width="40%"
            height="100%"
            color="rgb(50,50,50)"
            children={
              <div>
                <Section
                  key="1"
                  width="100%"
                  height="32%"
                  color="rgb(240,100,100)"
                  children={<Header name="Frosty" src='https://www.antarctica.gov.au/site/assets/files/45534/chinstrap.514x600.jpg' background='rgb(240,100,100)' disabled={ this.state.disabled }  />}
                />
                <List
                  key="2"
                  title="Profile"
                  styl="inside"
                  color="white"
                  line="rgb(240,100,100)"
                  change={this.handleChange}
                  disabled = {this.state.disabled}
                />
                <List
                  key="3"
                  title="Skills"
                  styl="outside"
                  color="white"
                  line="rgb(240,100,100)"
                  change={this.handleChange}
                  disabled = {this.state.disabled}
                  bar={1}
                />
                <List
                  key="4"
                  title="Contacts "
                  styl="outside"
                  color="white"
                  line="rgb(240,100,100)"
                  change={this.handleChange}
                  disabled = {this.state.disabled}
                />
              </div>
            }
          />
          <Section
            width="60%"
            height="100%"
            children={
              <div>
                <List
                  key="5"
                  title="Profissional Experience"
                  styl="outside"
                  color="black"
                  line="rgb(240,100,100)"
                  change={this.handleChange}
                  disabled = {this.state.disabled}
                />
                <List
                  key="6"
                  title="Education"
                  styl="outside"
                  color="black"
                  line="rgb(240,100,100)"
                  change={this.handleChange}
                  disabled = {this.state.disabled}
                />
                <List
                  key="7"
                  title="Hobbies "
                  styl= "outside"
                  color="black"
                  line="rgb(240,100,100)"
                  change={this.handleChange}
                  disabled = {this.state.disabled}
                />
              </div>
            }
          />
        </div>
        <input className = "submit"type="button" defaultValue= {this.state.disabled ? 'Edit':'Submit'} onClick={this.handleSubmit} />
      </form>
    );
  }
}

export default App;
