import { useState } from 'react';
/*import './App.css';*/
import'./components/Pages.css'
import ExpenseForm from './components/ExpenseForm';
import CalendarWTM from './components/Calendar'
import Header from './ui/Header';
import { Footer } from './ui/Footer';


function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };
  return (
    <div className="App">
      <Header/>
      <div style={{ display: 'flex' }}>
      <ExpenseForm addExpense={addExpense} />
      <CalendarWTM expenses={expenses} />
    </div>
    <Footer />
    </div>
  );
}

export default App;
