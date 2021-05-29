import React from 'react';
function Button (props){
return(
<input
        type="button"
        value={props.value}
        onClick={props.click}
        style={{ display: props.disabled ? "none" : "flex" }}
      />
)
}

export default Button;