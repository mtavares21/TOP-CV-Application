import React, {Component} from 'react'

class Bar extends Component{

constructor(props){
    super(props);
    this.pointColor = this.pointColor.bind(this);
    this.addSkill = this.addSkill.bind(this);
    this.setSkill = this.setSkill.bind(this);
    this.ids = [1,2,3,4,5,6,7]
    this.state = { 
                    pointClass:[],
                    skills:[]
                 }
}
// Add new skill inputs
addSkill (event) {
event.preventDefault()
this.ids = this.ids.map( item => item = item+1)
    this.setState( prevState =>{
            prevState.pointClass.push( ['point1', 'point0', 'point0', 'point0', 'point0'])
            prevState.skills.push('')
        return prevState
    })
}
// Set skill name onChange in state
setSkill(event){
event.preventDefault()
    const skillIndex = event.target.attributes[0].value;
    this.setState( prevState => {
        prevState.skills[skillIndex] = event.target.value
    return prevState
    }
)
}
// Set point color when clicked
pointColor (event) {
    event.preventDefault()
    const index = event.target.attributes[0].value.slice(0,1);
    const point = event.target.attributes[0].value.slice(1);
    const stateIndex = this.state.pointClass[index];
    const newState = stateIndex.map( (item, index) =>{ 
            index<=point ? item = 'point1' : item = 'point0'
        return item
    })
   this.setState( prevState => {
        prevState.pointClass[index]=newState;
        return prevState
   })
}
render() {
console.log(this.state)
return (
        <div>
            {
        this.state.skills.map( (item, index) => {
            return (
            <div key = {this.ids[index]} className='bar'>
                <input 
                    key = {this.ids[index+1]} 
                    index={ index } 
                    onChange = { this.setSkill } 
                    type='text' 
                    value = {this.state.skills[index]} 
                    disabled={ this.props.disabled } 
                    style = {{ borderStyle: this.props.disabled ? 'none':'solid', color: this.props.color}}
                /> 
                <div key = {this.ids[index+2]} className = 'pointWrap'>
                    {this.state.pointClass[index].map( (point,n) => 
                        <div 
                            index={ index + '' + n } 
                            key = { this.ids[index] + n }  
                            className = { point } 
                            onClick={ this.props.disabled? ()=>'':this.pointColor } 
                        >
                    </div> )}
                </div>
            </div>
            )
        }
    )
}
            <input 
                type="button" 
                value="New Skill" 
                onClick={ this.addSkill }  
                style = {{ display: this.props.disabled ? 'none':'flex' }} />
        </div>
        )
}
}

export default Bar

