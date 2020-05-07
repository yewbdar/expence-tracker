import React from 'react'

function IncomeExpences() {
    return (
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p id='money-plus' className='money plus'>$0.00</p>
            </div>
            <div>
                <h4>Expence</h4>
                <p id='money-minus' className='money minus'>$0.00</p>
            </div>
        </div>
    )
}

export default IncomeExpences
