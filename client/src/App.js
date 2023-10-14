import { useState } from 'react';
/*import './App.css';*/
import'./components/Pages.css'
import ExpenseForm from './components/ExpenseForm';
import CalendarWTM from './components/Calendar'

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div style={{ display: 'flex' }}>
      <ExpenseForm addExpense={addExpense} />
      <CalendarWTM expenses={expenses} />
    </div>
    </div>
  );
}

export default App;
