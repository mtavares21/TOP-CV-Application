import "./App.css";
import React, { Component } from "react";
import Section from "./components/Section";
import Header from "./components/Head";
import List from "./components/List";
import test from "./test.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {};
  }

  handleChange() {
console.log(window.event.path[0].value)
    this.setState((prevState) => {
      
      return prevState;
    });
  }

  handleSubmit(e) {
    console.log(e);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
                  height="30%"
                  color="rgb(240,100,100)"
                  children={<Header name="Miguel Tavares" src={test} />}
                />
                <List
                  key="2"
                  title="Profile"
                  styl="none"
                  color="white"
                  line="rgb(240,100,100)"
                  change = { this.handleChange }
                />
                <List
                  key="3"
                  title="Skills"
                  styl="none"
                  color="white"
                  line="rgb(240,100,100)"
                  change = { this.handleChange }
                />
                <List
                  key="4"
                  title="Contacts "
                  styl="none"
                  color="white"
                  line="rgb(240,100,100)"
                  change = { this.handleChange }
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
                  styl=""
                  color="black"
                  line="rgb(240,100,100)"
                />
                <List
                  key="6"
                  title="Education"
                  styl=""
                  color="black"
                  line="rgb(240,100,100)"
                />
                <List
                  key="7"
                  title="Hobbies "
                  styl=""
                  color="black"
                  line="rgb(240,100,100)"
                />
              </div>
            }
          />
        </div>
        <input type="submit" />
      </form>
    );
  }
}

export default App;
