import React, { useReducer } from "react";
import { createContext } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions :[
  
]
}

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [state , dispatch] = useReducer(AppReducer , initialState)

   function deleteTransaction(id){
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    }); 
   } 

   function AddTransaction(transaction){
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    }); 
   } 

    return (<GlobalContext.Provider value={
        {transactions : state.transactions,
          deleteTransaction,
          AddTransaction
        }
        
    }>
  {children}

    </GlobalContext.Provider>)
}
