import React from 'react'
import { GlobalContext, GlobalProvider } from './context/GlobalContext';
import { useContext } from 'react';

export default function Transaction({transaction}) {
  const {deleteTransaction} = useContext(GlobalContext)
    const sign = transaction.amount < 0 ? "-": "+";
  return (
    
       <li className= {transaction.amount<0 ? "minus" : "plus" }>
              {transaction.text} <span>{sign}₹{Math.abs(transaction.amount)}</span><button
              onClick={() =>  deleteTransaction(transaction.id)} className="delete-btn">x</button>
            </li> 
    
  )
}
