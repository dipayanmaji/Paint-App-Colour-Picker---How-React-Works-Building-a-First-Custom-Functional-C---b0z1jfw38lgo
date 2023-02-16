import React from 'react';
import "../styles/Child.css";

const Selection = ({applyColor})=>{
    return(
        <div onClick={applyColor} className={"fix-box"}>
            <h2 className={'subheading'}>Selection</h2>
        </div>
    );
}
export default Selection;