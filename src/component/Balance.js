import React ,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
function Balance() {
    const context=useContext(GlobalContext)
    return (
        <div>
            <h4>Your Balance</h4>
            <h1 id='balance'>$0.00</h1>
        </div>
    )
}

export default Balance
