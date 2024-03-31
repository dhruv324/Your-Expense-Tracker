import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

function App() {
  return (
    <div className="">
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList/>
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;