export default (state ,action) => {
    switch(action.type){
        case 'DELETE_TRANSACTION':
           return {
                ...state,transaction:state.transaction.filter( tran => tran.id !== action.payload)
                   
            }
        case 'ADD_TRANSACTION' :
            console.log('add action',action.payload )
            return{
                ...state,transaction:[action.payload,...state.transaction]
            }   
        default:
            console.log('after',state)
           return state;
    }
    
}