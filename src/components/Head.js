import React, {Component} from 'react'
class Head extends Component{

render(){
return (
        <div className= 'Head'>
            <img 
                width='200px' 
                height='250px' 
                src={this.props.src} 
                alt='upload for cv' 
            />
            <textarea 
                className='name' 
                defaultValue={ this.props.name }
                disabled={this.props.disabled}
                style = {{ 
                        borderStyle: this.props.disabled? 'none':'solid',
                        resize: this.props.disabled ? 'none':'both', 
                        color: this.props.color,
                        backgroundColor: this.props.background,
                        }}
            />
        </div>
        )
    }
}

export default Head