import "./App.css";
import React, { useState } from "react";
import Section from "./components/Section";
import Header from "./components/Head";
import List from "./components/List";

function App (props) {

    const [state, setState] = useState({
      id: [],
      text: [],
      disabled: false
    });
 

  function handleChange (event) {
  // Check for input id, if new push id and text, else setState
    const indexOfId = state.id.findIndex(
      (item) => item === event.target.id
    );
    let newState = state;
    if (indexOfId !== -1) {
    newState.text[indexOfId] = event.target.id;
    setState(newState)
    } else {
        newState.id.push(event.target.id);
        newState.text.push(event.target.value);
        setState(newState)
      };
    }
  

  function handleSubmit() {
    let newState = state;
    newState.disabled = !newState.disabled
    setState({...newState})
 console.log(state)
  }
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
                  children={<Header name="Frosty" src='https://www.antarctica.gov.au/site/assets/files/45534/chinstrap.514x600.jpg' background='rgb(240,100,100)' disabled={ state.disabled }  />}
                />
                <List
                  key="2"
                  title="Profile"
                  styl="inside"
                  color="white"
                  line="rgb(240,100,100)"
                  change={handleChange}
                  disabled = {state.disabled}
                />
                <List
                  key="3"
                  title="Skills"
                  styl="outside"
                  color="white"
                  line="rgb(240,100,100)"
                  change={handleChange}
                  disabled = {state.disabled}
                  bar={1}
                />
                <List
                  key="4"
                  title="Contacts "
                  styl="outside"
                  color="white"
                  line="rgb(240,100,100)"
                  change={handleChange}
                  disabled = {state.disabled}
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
                  change={handleChange}
                  disabled = {state.disabled}
                />
                <List
                  key="6"
                  title="Education"
                  styl="outside"
                  color="black"
                  line="rgb(240,100,100)"
                  change={handleChange}
                  disabled = {state.disabled}
                />
                <List
                  key="7"
                  title="Hobbies "
                  styl= "outside"
                  color="black"
                  line="rgb(240,100,100)"
                  change={handleChange}
                  disabled = {state.disabled}
                />
              </div>
            }
          />
        </div>
        <input className = "submit"type="button" defaultValue= {state.disabled ? 'Edit':'Submit'} onClick={handleSubmit} />
      </form>
    );
  }


export default App;
