import React ,{createContext,useReducer} from 'react';
import AppReducer from './AppReducer';
//Initial state
const initialState = {
      transaction:[
          {id:1, text:'flower',amount:-20},
          {id:2, text:'salery',amount:300},
          {id:3, text:'Book',amount:-10},
          {id:4, text:'Camera',amount:-150}
      ]
}
//create context
export const GlobalContext = createContext(initialState)

//Provider component 
export const GlobalProvider = ({children})=>{
    const [state , dispatch] = useReducer(AppReducer,initialState);
    return (
        <GlobalContext.Provider value={{transaction:state.transaction}}
        >{children}</GlobalContext.Provider>
    )
}