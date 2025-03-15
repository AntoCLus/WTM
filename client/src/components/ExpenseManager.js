import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';
import 'react-calendar/dist/Calendar.css';
import './Pages.css';



const ExpenseManager = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/expenses');
      setExpenses(response.data || []);
    } catch (error) {
      console.error('Error retrieving expenses:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingExpense) {
        await axios.put(`http://localhost:8000/api/expenses/${editingExpense._id}`, {
          amount,
          date: selectedDate.toISOString(),
          description,
        });
      } else {
        await axios.post('http://localhost:8000/api/expenses', {
          amount,
          date: selectedDate.toISOString(),
          description,
        });
      }
      fetchExpenses();
      resetForm();
    } catch (error) {
      console.error('Error saving expense:', error);
    }
  };

  const handleEdit = (expense) => {
    setEditingExpense(expense);
    setAmount(expense.amount);
    setSelectedDate(new Date(expense.date));
    setDescription(expense.description);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/expenses/${id}`);
      fetchExpenses(); 
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  };

  const resetForm = () => {
    setAmount('');
    setDescription('');
    setEditingExpense(null);
  };

  return (
    <div className="expense-manager">
     
      <h2 className='managertitle'>Manage Expenses</h2>
      <Calendar value={selectedDate} onChange={setSelectedDate} calendarType="US" />
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">{editingExpense ? 'Update' : 'Add'} Expense</button>
      </form>
      <div className="expense-list">
        {expenses.length > 0 ? (
          expenses.map((expense) => (
            <div key={expense._id} className="expense-item">
              <p>{new Date(expense.date).toLocaleDateString()}: ${expense.amount} - {expense.description}</p>
              <button onClick={() => handleEdit(expense)}>Edit</button>
              <button onClick={() => handleDelete(expense._id)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No expenses found.</p>
        )}
      </div>
    </div>
  );
};

export default ExpenseManager;
