import React,{useState,useEffect} from 'react'
import './LiveBitcoin.css'

function LiveBitcoin(){
   const [bitcoinOb, updateBitcoinOb]=useState({
      price:0,
      time:''
   })
   const [count, updateCount]=useState(0)
   useEffect(()=>{
      const timerID=setTimeout(()=>{
         updateCount(count+1)
         fetch('https://api.coindesk.com/v1/bpi/currentprice.json').then((response)=>{
            return response.json()
         }).then((data)=>{
            updateBitcoinOb((prevData)=>{
               return {price:data.bpi.USD.rate,
                       time:data.time.updated
               }
            }) 
         })

      },5000)
      return () => { clearTimeout(timerID)}
   },[count])


   
    return <div className='bitcoinComponent'>
        {/*<button onClick={getCurrentPrice} className='bitcoinButton'>Refresh</button>*/}
        <div className='priceSelection'>
           {`${bitcoinOb.price} USD ${bitcoinOb.time}`}
        </div>
    </div>
}
export default LiveBitcoin