import React from 'react'

function Section (props){
return (
    <div className = 'Section' style={{ backgroundColor: props.color, width: props.width, height: props.height }}>
         {props.children}
    </div>
)
}

export default Section;