import React, { useState, useEffect } from 'react'; 
import axios from "axios"
import AddExpense from './Expense'


const ExpenseForm = ({ addExpense, expense, deleteExpense, editExpense }) => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ amount, date, description });
    setAmount('');
    setDate('');
    setDescription('')
    console.log('Amount:', amount);
    console.log('Date:', date);
    console.log('Description:', description);
  };  
  const handleDelete = (id) => {
    deleteExpense(id);
  };

  const handleEdit = (id) => {
    editExpense(id)
  };
  const getAllExpenses = (id) =>{
    getAllExpenses(id)
  }
  useEffect(() => {
    axios.post('http://localhost:8000/expenses/create', { amount, date,description })
  .then(response => {   
    console.log('Expenses added successfully:', response.data);
    getAllExpenses();
  })
  .catch(error => {   
    console.error('Error adding expenses:', error);
  })

  axios.get('http://localhost:8000/expenses')
  .then(response =>{
    console.log('Expenses found successfully:', response.data);
  getAllExpenses();
})
.catch(error => {
 
  console.error('Error retrieving expenses:', error);
})
}, [])
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
  type="text"
  placeholder="Description"
  value={description}
  onChange={(e) => setDescription(e.target.value)}
/>
      <button type="submit" >Add Expense</button>
      <button type="submit" >Description</button>
      <button type="button" onClick={() => handleEdit(expense.id)}>Edit</button>
      <button type="button" onClick={() => handleDelete(expense.id)}>Delete</button>
    </form>
  );
};

// onClick={() =>handleSubmit()
export default ExpenseForm;