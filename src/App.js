import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'a1',
    title: 'Notebook',
    amount: 93.12,
    date: new Date(2019, 7, 14),
  },
  { id: 'a2', title: 'Laptop', amount: 1099.49, date: new Date(2022, 2, 12) },
  {
    id: 'a3',
    title: 'Television',
    amount: 254.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: 'a4',
    title: 'Wooden Desk',
    amount: 454.55,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
