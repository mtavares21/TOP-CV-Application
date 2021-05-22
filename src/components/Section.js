import React, {Component} from 'react'

class Section extends Component{

render(){
return (
    <div className = 'Section' style={{ backgroundColor: this.props.color, width: this.props.width, height:this.props.height }}>
        {this.props.children}
    </div>
)
}
}

export default Section;