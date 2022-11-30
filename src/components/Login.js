import React ,{useState,useRef,useEffect,useContext}from 'react'
import  './Login.css'
import MyContext from './store/MyContext'
function Login(props){
    
    let[loginStatus,updateLoginStatus]=useState(false)
    const userName=useRef()
    const userPass=useRef()
    let obj=useContext(MyContext)
    useEffect(()=>{

        if(localStorage.getItem('status')==='1'){
            obj.loginStatus=true
            updateLoginStatus(true)

            
        }
        
    },[])
   
    function authorizeUser(){
        if(userName.current.value==='root' && userPass.current.value==='chitkara'){
            localStorage.setItem('status','1')
            updateLoginStatus(true)
            loginStatus=true
            obj.loginStatus=true
         props.sendLoginStatus(loginStatus)
            
        }
          
    }
    function logout(){
        localStorage.removeItem('status')
        updateLoginStatus(false)
        loginStatus=false
        obj.loginStatus=false
        props.sendLoginStatus(loginStatus) 

    }
    
    return<div className='userComponent'>
        <div>
          <lable htmlFor='myuser'>Username</lable><br></br>
          <input type="text" id='myuser' ref={userName} className='userInputBox' required/>
        </div>
        <div>
        <lable htmlFor='mypass'>Password</lable><br></br>
          <input type="password" id='mypass' ref={userPass} className='userInputBox' required/>
         </div>
            <div>
                {
            loginStatus ?<button className='userButton' onClick={logout} >Logout</button>
               : <button className='userButton' onClick={authorizeUser}>Authorise</button>
            
                
            
                }
             </div>
            <div>
                {
                    loginStatus ?<h2>Congratulation, you are authorize</h2>:
                    <h2>Please try again credentials are incorrect</h2>
                }
            </div>
            
           
    </div>
}
export default Login