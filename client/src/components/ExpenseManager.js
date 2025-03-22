import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';
import 'react-calendar/dist/Calendar.css';
import './Pages.css';
import "bootstrap/dist/css/bootstrap.min.css";




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
    <div className="container mt-4">
      <h2 className="text-center mb-4">Manage Expenses</h2>
  
      <div className="row">
        {/* Calendar on the left */}
        <div className="col-md-4">
          <div className="p-3 border rounded bg-light">
            <Calendar value={selectedDate} onChange={setSelectedDate} calendarType="US" />
          </div>
        </div>
  
        {/* Expense List on the right */}
        <div className="col-md-8">
          <div className="p-3 border rounded bg-white">
            <h4>Expense List</h4>
            {expenses.length > 0 ? (
              expenses.map((expense) => (
                <div key={expense._id} className="d-flex justify-content-between align-items-center p-2 border-bottom">
                  <p className="mb-0">{new Date(expense.date).toLocaleDateString()}: <strong>${expense.amount}</strong> - {expense.description}</p>
                  <div>
                    <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(expense)}>Edit</button>
                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(expense._id)}>Delete</button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-muted">No expenses found.</p>
            )}
          </div>
        </div>
      </div>
  
      {/* Form below */}
      <div className="row mt-4">
        <div className="col">
          <div className="p-3 border rounded bg-white">
            <h4>{editingExpense ? "Update Expense" : "Add Expense"}</h4>
            <form onSubmit={handleSubmit} className="d-flex gap-2">
              <input
                type="number"
                className="form-control"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
              <input
                type="text"
                className="form-control"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary">
                {editingExpense ? "Update" : "Add"} Expense
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
  export default ExpenseManager;
  


