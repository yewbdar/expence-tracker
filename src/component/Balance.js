import React ,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
function Balance() {
    const {transaction}=useContext(GlobalContext)
   const amount=transaction.map(amount => amount.amount)
    const newValue = amount.reduce((total , curr) => ( total += curr) , 0).toFixed(0) 
   
    return (
        <div>
            <h4>Your Balance</h4>
            <h1 id='balance'>${newValue}</h1>
        </div>
    )
}

export default Balance
