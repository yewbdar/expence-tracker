import React ,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
function IncomeExpences() {
     const {transaction} = useContext(GlobalContext)
     const amount=transaction.map(amount => amount.amount)
     const inCome = amount.filter(num => num > 0)
                          .reduce((total,curr) => (total + curr),0)
                          .toFixed(2)
    const expense = amount.filter(num => num < 0)
                          .reduce((total,curr) => (total + curr),0)
                          .toFixed(2)
     return (
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
          <p id='money-plus' className='money plus'>${inCome}</p>
            </div>
            <div>
                <h4>Expence</h4>
        <p id='money-minus' className='money minus'>${expense}</p>
            </div>
        </div>
    )
}

export default IncomeExpences
