
import ExpensItem from "./ExpenseItem";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

function Expenses(props) {

    const [expense , setExpense] = useState([]);
    const fetchData = ()=>{
        //TO fetch the details
        // http://localhost:8080/getExpenses
        //https://expense-api-dtoy.onrender.com/getExpenses
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
            <Card className="expenses">
            {expense && expense.length >0 && expense.map((expense , index) => (
                <li key={index}>
                {<ExpensItem title={expense.title}
                amount={expense.amount}
                date={expense.date}></ExpensItem>
                }
                </li>
            ))
            }
            </Card>
        </div>
    );
}

export default Expenses;