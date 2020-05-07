import React ,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
function TransactionList() {
    const {transaction} = useContext(GlobalContext)
  
    return (
        <>
           <h3>History</h3> 
           <ul id='list' className='list '>
               {transaction.map(item => <li className={item.amount > 0 ? 'plus' : 'minus' } key={item.id}>
                   {item.text} <span>{item.amount > 0 ? '+' : '-'}${Math.abs(item.amount)}</span><button className='delete-btn'>X</button>
               </li>)}
               
               
               
           </ul>
        </>
    )  
}

export default TransactionList
