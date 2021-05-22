import React, { Component } from "react";

class List extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
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
  
  render() {
    return (
      <div className="list" style={{ color: this.props.color }}>
        <h2>{this.props.title}</h2>
        <div
          className="line"
          style={{ backgroundColor: this.props.line }}
        ></div>
        <ul
          id={this.props.title}
          style={{
            listStyle: this.props.styl,
            paddingLeft: this.props.styl === "" ? "20px" : 0
          }}
        >
          {this.state.li.items.id.map( (li) => (
            <li key={"li" + li + this.props.title} id={li + this.props.title}>
              <textarea
                key={"txt" + li + this.props.title}
                id= {"txt" + li + this.props.title}
                onChange={ this.props.change }
                type="text"
              />
            </li>
          ))}
          <input
            type="button"
            value="Paragraph"
            onClick={this.newPara}
          />
        </ul>
      </div>
    );
  }
}

export default List;
