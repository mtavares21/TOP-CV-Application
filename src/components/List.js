import React, { useState } from "react";
import Bar from './Bar';
import Button from './Button';
function List (props) {

    const [lastID, setLastID] = useState(1);
    const [ items, setItems] = useState({
                                  id: [1], 
                                  text:['']
                                }) 
                     
 // Creat a new paragraph by setting state
  function newPara() {
    let newID = lastID;
    newID=newID+1;
    let newItems = Object.assign({}, items );
    newItems.id.push(2)
    newItems.text.push('')
    newItems = { 
        id: newItems.id,
        text: newItems.text
    }
    setLastID(newID);
    setItems(newItems);
  }
  function input   () {
    return (
        <ul id={props.title} style={{listStyle: props.styl}}> 
            {/* Map state items  */}
            {items.id.map( (li) => (
            <li key={"li" + li + props.title} id={li + props.title}>
              <textarea 
                key={ "txt" + li + props.title} id= {"txt" + li + props.title}
                onChange={ props.change }
                type="text"
                disabled={props.disabled}
                style = {{ borderStyle: props.disabled? 'none':'solid', resize: props.disabled ? 'none':'both', color: props.color}}
              />
            </li>
          ))}
            <Button value = 'New Topic' click={newPara} disabled={props.disabled}/>
        </ul>
            )
  }

    return (
      <div className="list" style={{ color: props.color }}>
        <h2>{props.title}</h2>
        <div className="line" style={{ backgroundColor: props.line }}></div>
        { props.bar ? <Bar bar = {props.bar} color={props.color} disabled = {props.disabled} /> :input()  }
      </div>
    );
  }

export default List;
