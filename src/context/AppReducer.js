export default (state ,action) => {
    switch(action.type){
        case 'DELETE_TRANSACTION':
           return {
                ...state,transaction:state.transaction.filter( tran => tran.id !== action.payload)
                   
            }
        case 'ADD_TRANSACTION' :
            console.log('add action',action.payload )
            return{
                ...state,transaction:[...state.transaction,action.payload]
            }   
        default:
            console.log('after',state)
           return state;
    }
    
}