import { useState } from 'react';
/*import './App.css';*/
import'./components/Pages.css'
import ExpenseForm from './components/ExpenseForm';
import CalendarWTM from './components/Calendar'
import {Header} from './ui/Header';
import { Footer } from './ui/Footer';
import ExpenseItem from './components/ExpenseItem';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import LandingPage from './components/LandingPage';



function App() {
  const [expenses, setExpenses] = useState([]);
  const getAllExpenses =() =>{
    try{
      axios.get("http://localhost:8000/expenses")
      .then((res) =>{
        setExpenses(res.data)
        console.log(expenses)
      })
    }catch(error){ console.log(error)

    } 
  }

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };
  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };
  const editExpense =(id)=> {
    setExpenses(expenses.filter(expense => expense.id !== id));
  }
  return (
    
    <BrowserRouter>
    <Header/>
    <div style={{ display: 'flex' }}> 
    <Routes>
      <Route path="/" 
      element={
      <>
      <ExpenseForm addExpense={addExpense}  
      deleteExpense={deleteExpense}
      editExpense={editExpense} />
      <CalendarWTM expenses={expenses} />
      </> 
      }
      />
      <Route path="/expenses" element={<ExpenseItem getAllExpenses={getAllExpenses} />}/>
      <Route path="/home" index element={<LandingPage/>}/>
    </Routes>
     
    </div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
