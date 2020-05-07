import React from 'react';
import './App.css';
import Header from './component/Header'
import Balance from './component/Balance'
import IncomeExpences from './component/IncomeExpences'
import AddTransaction from './component/AddTransaction'
import TransactionList from './component/TransactionList'
import {GlobalProvider} from './context/GlobalState'
function App() {
  return (
    <GlobalProvider>
      <Header/>
       <div className='container'>
            <Balance/>
            <IncomeExpences/>
            <TransactionList/>
            <AddTransaction/>
       </div>
       </GlobalProvider>
         
  );
}

export default App;
