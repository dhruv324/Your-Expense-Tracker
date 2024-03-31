import React, { useContext } from 'react';
import { GlobalContext } from './context/GlobalContext';

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  if (!transactions) {
    return null; 
  }

  const amounts = transactions.map(transaction => parseFloat(transaction.amount));

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);
  const expenses = amounts
    .filter(item => item < 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">{Math.abs(expenses)}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
