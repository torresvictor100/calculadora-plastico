import React from "react";

import './Display.css'

export default props => {

    let classes = 'display'
    classes += props.result ? 'Result' : ''
    
    return (
        <div className={classes}>{props.value}</div>
    )
}