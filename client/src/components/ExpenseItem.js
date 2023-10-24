import axios from "axios"; 
import {useState} from "react";

function ExpenseItem({ getAllExpenses, expenses, deleteExpense, editExpense, Expense }) {
  //const [editExpense, setEditExpense] = useState("");
  

  async function deleteExpense(id) {
    try{
      await axios.delete('http://localhost:8000/expenses/${id}')
        getAllExpenses()
      
    } catch (error){
      console.log("error deleting todo", error)
    }
  }
    // Handle the delete logic here (e.g., make a request to delete the todo with the given id)

    // Update the user interface after you delete a task by calling getAllTodos
  

  async function editExpense(id) {
    try{
      await axios.put('http://localhost:8000/expenses/${id}', {
        text: "Updated Expense Text",
      })
    // setEditExpense("")
     getAllExpenses()
    } catch (error){
      console.log("updating todo", error)
    }
    // Add your logic to update a todo item here
  }

  async function toggleStatus(id) {
    // Add your logic to toggle the status of a todo item here
    try {
      await axios.put(`http://localhost:8000/expenses/${id}`, {
        status: "completed", 
      });
      console.log("Todo status updated successfully:");
      getAllExpenses();
    } catch (error) {
      console.error("Error updating todo status:", error);
    }
  }

  return (
    <div>
      {/* Map through the todos and render each one */}
      {expenses.map((expense) => (
        <div key={expenses._id}>
          <input type="checkbox" onChange={() => toggleStatus(expenses._id, !expenses.status)} />
          <h1>{expense._id}</h1>
          <span>{expenses.text}</span>
          <button className="deleteBtn" onClick={() => deleteExpense(expenses._id)}>
            <i className="material-icons">delete</i>
          </button>
          <button className="editBtn" onClick={() => editExpense(expenses._id)}>
            <i className="material-icons">edit</i>
          </button>
        </div>
      ))}
    </div>
  );
}

export default ExpenseItem;