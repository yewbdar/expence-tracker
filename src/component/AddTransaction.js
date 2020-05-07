import React ,{useState}from 'react'

function AddTransaction() {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
   
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
           
        
           <button className='btn'>Add transaction</button>
        </div>
    )
}

export default AddTransaction
