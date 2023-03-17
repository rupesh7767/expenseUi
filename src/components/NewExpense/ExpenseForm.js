
import './ExpenseForm.css';

import { Form , handleSubmit } from "react-bootstrap";

import React from 'react';

class ExpenseForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = { title:''};
      }

      handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
      }

     refreshPage =() =>{
        window.location.reload(false);
      }

     handleSubmit = (event) => {
    
        fetch('https://expense-api-dtoy.onrender.com/saveExpenses', {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
            method: 'POST',
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify(this.state)
          }).then(function(response) {
            console.log(response)
            return response.json();
          });
     
        event.preventDefault();
    }

    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
            <div className='new-expense__controls'>
            <div className='new-expense__control'>
            <label>Title</label>
            <input type='text'  name ="title" value={this.state.value} onChange={this.handleChange}/>
            </div>
    
            <div className='new-expense__control'>
            <label>Amount</label>
            <input type='number' name="amount" min="0.01" step="0.01" value={this.state.value} onChange={this.handleChange}/>
            </div>
    
            <div className='new-expense__control'>
            <label>Date</label>
            <input type='Date' min="2019-01-01" name="date" max="2023-12-31" value={this.state.value} onChange={this.handleChange}/>
            </div>
    
            </div>
    
            <div className='new-expense_actions'>
            <button type='submit' onClick={this.refreshPage} > Add Expenses</button>
            </div>
            </Form>
        )
    }
   
}

export default ExpenseForm;