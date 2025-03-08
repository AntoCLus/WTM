import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import './components/Pages.css';
import ExpenseForm from './components/ExpenseForm';
import CalendarWTM from './components/Calendar';
import { Header } from './ui/Header';
import { Footer } from './ui/Footer';
import ExpenseItem from './components/ExpenseItem';
import LandingPage from './components/LandingPage';
import { Navbar } from './ui/NavBar';
import Login from './components/Login';
import Register from './components/register';

function App() {
  const [expenses, setExpenses] = useState([]);

  // Fetch expenses on component mount
  useEffect(() => {
    getAllExpenses();
  }, []);

  const getAllExpenses = async () => {
    try {
      const res = await axios.get("http://localhost:8080/expenses");
      setExpenses(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const editExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/expenses"
            element={<ExpenseItem getAllExpenses={getAllExpenses} />}
          />
          <Route
            path="/add-expense"
            element={
              <>
                <ExpenseForm
                  addExpense={addExpense}
                  deleteExpense={deleteExpense}
                  editExpense={editExpense}
                />
                <CalendarWTM expenses={expenses} />
              </>
            }
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
