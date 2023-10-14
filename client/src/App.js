import { useState } from 'react';
/*import './App.css';*/
import'./components/Pages.css'
import ExpenseForm from './components/ExpenseForm';
import CalendarWTM from './components/Calendar'
import Header from './ui/Header';
import Footer from './ui/Footer';
import NavBar from './ui/NavBar';
import ExpenseItem from './components/ExpenseItem';
import { BrowserRouter } from "react-router-dom";

function App() {
  const [expenses, setExpenses] = useState([]);
  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };
  const deleteExpense = (Expense) => {
    setExpenses([...expenses, Expense]);
  };
  const editExpense =(Expense)=> {
    setExpenses([...expenses, Expense]);
  }

  
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <NavBar />
      <div style={{ display: 'flex' }}>
      <ExpenseForm 
      addExpense={addExpense}
      deleteExpense={deleteExpense}
      editExpense={editExpense} />
      <CalendarWTM expenses={expenses} />
    </div>
    <Footer />
    </div>
    </BrowserRouter>
    
  );
}

export default App;
