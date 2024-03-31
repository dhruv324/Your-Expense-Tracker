import React, { useState, useContext } from 'react';
import { GlobalContext } from './context/GlobalContext';
import { GlobalProvider } from './context/GlobalContext';
export default function AddTransaction() {
  const { AddTransaction } = useContext(GlobalContext);

  const handleSubmit = e => {
    e.preventDefault();
    
    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: parseFloat(amount)
    }

    if (newTransaction.text.trim() && !isNaN(newTransaction.amount)) {
      AddTransaction(newTransaction);
      
      
      setText('');
      setAmount('');
    }
  }

  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit} id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
          <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
}
