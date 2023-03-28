import Card from '../UI/card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import { Form } from "react-bootstrap";

import React,{useState} from 'react';
const ExpensItem =(props) =>{
    const [title , setTitle] =useState(props.title);
    const [amount , setAmount] =useState(props.amount);
    const [date , setDate] =useState(props.date);

    // console.log(title , amount , date);

   const handleDelete =(event)=>{

    const data = {
        title : title,
        amount : amount,
        date: date
        
    }
    //const url="https://expense-api-dtoy.onrender.com/deleteExpensesByTitle";
    const url = "http://localhost:8080/deleteExpensesByTitle";
    console.log("Delete command triggered!!!!!")
        fetch( url,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                  },
                body: JSON.stringify(data)
            }
        ).then(function(response) {
            if(!response.ok){
                throw new Error("SOmething wrong!!!");
            }
            console.log("deleted ")
            return response.json();
          })
          .catch((e)=>{
            console.log(e);
          })

          window.location.reload(false); 
    }

    const dateFormate = props.date.split("-");

    const month = dateFormate[1];
    const year = dateFormate[0];
    //const date = dateFormate[2].split("T");


    {
        if(year === props.year || "All" === props.year){
            return (
            <Card className="expense-item">    
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'> <span>&#8377;</span>{props.amount}</div>
            </div>
            <button className='expense-item__price' type='submit' onClick={handleDelete}>Delete</button>
                </Card>
            );
        }
    }

   
}

export default ExpensItem;