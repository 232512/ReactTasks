import React,{useState} from  'react'
import './DemoComponent.css'
import Datecomponent  from './DateComponent'
function DemoComponent(props){
    /*const date='28 May,2020'
    const expense_type='Car Insurance'
    const price='$125'*/
    let [expenditureType, updateType] = useState(props.type) 
    const clickHandler =()=>{
        //alert('you just Checkout bought...'+props.type)
        updateType("Expenditure type changed")
        console.log(expenditureType)
    }
    
    return <div className='myComponent'>
        <Datecomponent date={props.date} />
       {/*<div className='showData'> {props.date} </div>*/}
        <div className='showType'>  {expenditureType}</div>
        <div className='showPrice'> {props.price}</div>
        <button className='buttonStyle' onClick={clickHandler}>Checkout</button>
        
    </div>

}
export default DemoComponent