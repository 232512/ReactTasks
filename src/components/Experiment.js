import React,{useRef} from 'react'
import './Experiment.css'
import Sample from './Sample'
function Experiment(){
    const nameHook=useRef()
    function clickHandler (){
        alert(nameHook.current.value)
    }
    return<div className='ExperimentComponent'>
        <Sample/><br></br>
        <div>
            <label htmlFor='clinet'>Client Name</label><br></br>
            <input type="text" id='client' ref={nameHook} className='ExperimentInputBox'/>

        </div>
        <div>
            <br></br>
            <button className='ExperimentButton' onClick={clickHandler}>Approve</button>
        </div>
    </div>
}
export default Experiment