import React ,{useState , useContext}from 'react'
import {GlobalContext} from '../context/GlobalState';
import { v4 as uuidv4 } from 'uuid'
function AddTransaction() {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

   const {addTransaction , transaction} = useContext(GlobalContext)
   const data = {
          id:uuidv4(),
          text:text,
          amount:+amount
   }
   console.log(data)
    return (
        <div>
           <h3>Add new transaction</h3>
           <form >
             <div className='form-control'>
             <label htmlFor='text'>Text</label>
             <input onChange ={(e)=> setText(e.target.value)} value={text} type='text'  placeholder='Enter text ...'/> 
             </div>

             <div className='form-control'>
             <label htmlFor='amount'>Amount <br/> (negative-expense,postive-income</label>
             <input onChange ={(e)=> setAmount(e.target.value)} value={amount} type='number'  placeholder='Enter amount ...'/>
             </div>
            
           </form>
           
        
           <button  onClick={() => addTransaction(data)} className='btn'>Add transaction</button>
        </div>
    )
}

export default AddTransaction
