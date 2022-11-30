import React,{useState} from 'react';
//import  ReactDOM  from 'react-dom';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseFilter from './components/ExpenseFilter';
import DemoComponent from './components/DemoComponent';

//import ExpenseForm from './components/ExpenseForm';
//import ExpenseFilter from './components/ExpenseFilter';
//import ConfigurableBox from './components/ConfigurableBox';
//import Experiment from './components/Experiment';
import Login from './components/Login';
//import MyPortal from './components/MyPortal';
//import StopTimer from './components/StopTimer';
import MyContext from './components/store/MyContext';
//import LiveBitcoin from './components/LiveBitcoin';


function App() {
  let [data, updateData] = useState([])
  let [selectedYear, updateSelectedYear] = useState('all')
  let[loginStatus1,updateLoginStatus1]=useState(false)
  let status=true
  if(localStorage.getItem('status')==='0'){
    status=false

    
}else{status=true}
  
  
  //let[loginStatusComponent,updateLoginStatusComponent]=useState(false)

  //const mylength = data.length > 0 ? true : false
  function getDataFromExpenseForm(formRecord) {
    updateData((prevData) => {
      return [...prevData, formRecord]

    })

  }
  function getSelectedYear(selectedYear) {
    updateSelectedYear(selectedYear)
  }
  function getLoginStatus(loginStatus1){
    updateLoginStatus1(loginStatus1)
  }
  /*const data={
    date:'24-may-2020',
    price: '$233',
    type:'Car Insurance'
  }*/

  return (<div>
    <MyContext.Provider value={{loginStatus:  status}}>
    {/*<div>
      {
        ReactDOM.createPortal(<MyPortal/>,document.getElementById('mySection'))
      }
    
    </div><br></br>*/}{/*
    <div>
      <LiveBitcoin/>
    </div>
    
    <div>
      <StopTimer></StopTimer>
    </div>
    */}
    <div>
    <br></br>
      <Login sendLoginStatus={getLoginStatus}/>
      {/*<Experiment />*/}
    </div>
    <br></br>
    <div>
      {
        loginStatus1 &&<ExpenseForm sendDataToAppComponent={getDataFromExpenseForm} /> 
        
      }
      <br></br>
      {
       loginStatus1 &&<ExpenseFilter sendSelectedYear={getSelectedYear} />
       
      }
       
    </div>
    <br></br>
     {/*} <ConfigurableBox thickness='2' color='cornflowerblue' width='150%' />
      <br></br>
      <br></br>
      <ConfigurableBox thickness='2' color='yellow' width='150%' />
    */}
      <br></br>


      {
        selectedYear === 'all' ? data.map((obj, index) => {
          return <DemoComponent key={index} type={obj.type} price={obj.price} date={obj.date} />



        }) : <h1>You Selected None option</h1>
      }
      </MyContext.Provider>
      {/*!mylength && <h1><center>At present there is no entery start making entry
      </center>
      </h1>*/

      }
    

  </div>

  );
}
export default App;
