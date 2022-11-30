import React from  'react'
import './DatecComponent.css'
function Datecomponent(props){
    return(
    <div className='showData'>
        {props.date}

    </div>
    );
}
export default Datecomponent