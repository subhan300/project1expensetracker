

// const AppReducer=(state,action)=>{
//     switch(action.type){
//         case 'DELETE_TRANSACTION':
//             return {
//                 ...state,
//                 transactionso: state.transactions.filter(tran => tran.id !== action.payload)
//             }

//         default:
//             return state
//     }
// }
// export default AppReducer
import {AddTransaction} from "./add_transaction.js"



export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactionsj: state.transactionsj
                    .filter(transaction => {console.log(transaction)
                      return(  transaction.id !== action.payload)})
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactionsj: [action.payload, ...state.transactionsj]
            }
        default:
            return state;
    }
}