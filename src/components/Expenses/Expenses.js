
import ExpensItem from "./ExpenseItem";
import React, { useEffect, useState } from "react";

function Expenses(props) {

    const [expense , setExpense] = useState([]);
    const fetchData = ()=>{
            fetch(
                "https://expense-api-dtoy.onrender.com/getExpenses")
            .then((response) => response.json())
            .then((data) => setExpense(data));;
    }

    useEffect(() => {
        fetchData();
      },[])



    return (        
        <div>
            {expense && expense.length >0 && expense.map((expense , index) => (
                <li key={index}>
                {<ExpensItem title={expense.title}
                amount={expense.amount}
                date={expense.date}></ExpensItem>
                }
                </li>
            ))
            }
        </div>
    );
}

export default Expenses;