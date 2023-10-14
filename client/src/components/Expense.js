import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
function AddExpense({ getAllExpenses }) {
    const [expense, setExpenses] = useState({
      text: "",
      status: "pending",
    });
    return(

        <div>
 <ExpenseItem expenses={expense} getAllExpenses={getAllExpenses} />
        </div>
    )
    }
export default AddExpense;