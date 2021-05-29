import React from 'react'

function Head (props){
return (
        <div className= 'Head'>
            <img 
                width='200px' 
                height='250px' 
                src={props.src} 
                alt='upload for cv' 
            />
            <textarea 
                className='name' 
                defaultValue={ props.name }
                disabled={props.disabled}
                style = {{ 
                        borderStyle: props.disabled? 'none':'solid',
                        resize: props.disabled ? 'none':'both', 
                        color: props.color,
                        backgroundColor: props.background,
                        }}
            />
        </div>
        )
    }

export default Head