import React, { Component } from "react";
import Bar from './Bar'
class List extends Component {

  constructor(props) {
    super(props);
    this.input = this.input.bind(this)
    this.newPara = this.newPara.bind(this);
    this.state = { li: {lastID:1, 
                        items: {
                            id: [1], 
                            text:['']} 
                        }
                    };
  }

 // Creat a new paragraph by setting state
  newPara(){
    this.setState( (preState) =>{
        preState.li.items.id.push(preState.li.lastID+1);
        preState.li.items.text.push('');    
        preState.li.lastID +=1;
        return preState;
    })
    }
  input(){
    return (
        <ul id={this.props.title} style={{listStyle: this.props.styl}}> 
            {/* Map state items  */}
            {this.state.li.items.id.map( (li) => (
            <li key={"li" + li + this.props.title} id={li + this.props.title}>
              <textarea key={ "txt" + li + this.props.title} id= {"txt" + li + this.props.title}
                onChange={ this.props.change }
                type="text"
                disabled={this.props.disabled}
                style = {{ borderStyle: this.props.disabled? 'none':'solid', resize: this.props.disabled ? 'none':'both', color: this.props.color}}
              />
            </li>
          ))}
            <input type="button" value="New Topic" onClick={this.newPara}  style = {{ display: this.props.disabled ? 'none':'flex' }} />
        </ul>
            )
  }

  render() {
    return (
      <div className="list" style={{ color: this.props.color }}>
        <h2>{this.props.title}</h2>
        <div className="line" style={{ backgroundColor: this.props.line }}></div>
        { this.props.bar ? <Bar bar = {this.props.bar} color={this.props.color} disabled = {this.props.disabled} /> : this.input()  }
      </div>
    );
  }
}

export default List;
