import React, { useContext } from 'react';
import { GlobalContext } from './context/GlobalContext';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  // Check if transactions is null or undefined
  if (!transactions) {
    return null; // or display a loading indicator or message
  }

  // Ensure amounts are parsed as numbers and calculate total
  const amounts = transactions.map(transaction => parseFloat(transaction.amount));
  const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>₹{total}</h1>
    </>
  );
};

export default Balance;
