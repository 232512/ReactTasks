import React from  'react'
import './ExpenseFilter.css'
function ExpenseFilter(props)
{   function changeHandler(event){
       props.sendSelectedYear(event.target.value)
}
    return <div className="myoption">
                   <div >
                      <select className="add" onChange={changeHandler}>
                          <option value='all'>all</option>
                          <option value='2019'>2019</option>
                           <option value='none'> None</option>
                          
                      </select>
                   </div>
                   
          
          </div>
}
export default ExpenseFilter
