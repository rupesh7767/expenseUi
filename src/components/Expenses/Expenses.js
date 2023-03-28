import ExpenseItem from './ExpenseItem';
import Card from '../UI/card';
import ExpensesFilter from "../Extra/ExpensesFilter";
import './Expenses.css';
import React, { useEffect, useState } from "react";

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2022');
  const [expense , setExpense] = useState([]);

  const fetchData = ()=>{
    //TO fetch the details
    const url = "http://localhost:8080/getExpenses";
    // const url="https://expense-api-dtoy.onrender.com/getExpenses";
        fetch(url)
        .then((response) => response.json())
        .then((data) => setExpense(data));;
}

useEffect(() => {
    fetchData();
  },[])


  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log("Selected year" + selectedYear)
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>;


    expensesContent = expense.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        year={filteredYear}
      />
    ));
  

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;