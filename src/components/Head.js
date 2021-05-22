import React, {Component} from 'react'
class Head extends Component{

render(){
return (
        <div className= 'Head'>
            <img width='200px' height='250px' src={this.props.src} alt='upload for cv' />
            <h1>{this.props.name}</h1>
        </div>
        )
    }
}

export default Head