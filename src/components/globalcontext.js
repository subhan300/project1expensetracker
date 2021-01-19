
 
import React, { createContext, useReducer } from 'react';

// Import the Reducer
import AppReducer from './AppReducer';
import {AddTransaction} from "./add_transaction.js"

// Create the initial state


const  initialState ={
    transactionsj:[{
        id:1,
        description:"expense",
        transaction_amount:200},
       { id:2,
        description:"income",
       transaction_amount:500},
      { id:3,
        description:"expense",
        transaction_amount:400},
       { id:4,
        description:"income",
        transaction_amount:-1000}

    ]
}

// Create the Global Context
export const GlobalContext = createContext(initialState);

// Create a Provider for the Global Context
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions for Transactions

        // Delete Existing Transaction Action
        function delTransaction(id) {
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            });
        }

        // Add New Transaction Action
        function addTransaction(transaction) {
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: transaction
            })
        }

    return (
        <GlobalContext.Provider value={
            {
                transactionsofg: state.transactionsj,
                delTransaction,
                addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    );

}
