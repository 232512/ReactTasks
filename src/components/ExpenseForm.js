import React, { useState ,useContext } from  'react'
import './ExpenseForm.css'
import MyContext from './store/MyContext'
function ExpenseFrom (props){
    let [allExpenses, updateExpenses]=useState({
          type: '',
          price: '',
          date: ''

    })
    const myContextObj=useContext(MyContext)
      /* let [expenseType,setExpenseType]=useState(' ')

      let [expensePrice, setExpensePrice]= useState(' ')
      let [expenseDate, setExpenseDate]=useState(' ')*/

      const expenseHandler=(event) =>
      {   event.preventDefault()
          // alert(allExpenses.type+" "+allExpenses.price+" "+allExpenses.date)
          /* setExpenseType(' ')
           setExpensePrice(' ')
           setExpenseDate(' ')*/
         if(myContextObj.loginStatus===false){
               alert('no entry')
               return
         }
           props.sendDataToAppComponent(allExpenses)
           updateExpenses({
                 type:'',
                 price:'',
                 date:''
           })
      }
      const expenseTypeHandler=(event)=>
      {
            //setExpenseType( event.target.value)
            updateExpenses((prevState)=>{
                  return {
                        ...prevState,
                        type: event.target.value
                  }
            })
      }
      const expensePriceHandler=(event)=>
      {
           // setExpensePrice(event.target.value)
           updateExpenses((prevState)=>{
            return {
                  ...prevState,
                  price: event.target.value
            }
      })
      }
      const expenseDateHandler=(event)=>
      {
           //setExpenseDate(event.target.value) 
           updateExpenses((prevState)=>{
            return {
                  ...prevState,
                  date: event.target.value
            }
      })
      }
    return <div className='myComponents'>
      <form onSubmit={expenseHandler}>
          <div>
                 <label for='expenseType'>Expense Type</label> <br></br>
                 <input type="text" id='expenseType' className="myInputBoxes" value={allExpenses.type}  onChange={expenseTypeHandler} required="required"/>
           </div>
           
           <div>
                 <label for='expensePrice'>Expense Price</label><br></br>
                 <input type="text" id='expensePrice' className="myInputBoxes"value={allExpenses.price}  onChange={expensePriceHandler} required="required"/>
           </div>
           
           <div>
                 <label for='expenseDate'>Expense Date</label><br></br>
                 <input type="date" id='expenseDate' className="myInputBoxes" value={allExpenses.date}  onChange={expenseDateHandler} required="required"/>
           </div><br></br>
           <div className="newFlex">
                 <input type="submit" className="myButton" value="Add Expense" />
            </div>

      </form>
           </div>
}
export default ExpenseFrom