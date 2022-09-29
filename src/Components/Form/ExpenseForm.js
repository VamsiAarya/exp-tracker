import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] =useState('');
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // console.log(event.target.value);
    }


    const [enteredDate, setDate] = useState('');
    const dateChangeHandler =(event) => {
        setDate(event.target.value);
        // console.log(event.target.value);
    }

    const [enteredAmount, setAmount] = useState('');
    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title : enteredTitle,
            amount : +enteredAmount,
            date : new Date(enteredDate)
        };

        // console.log(expenseData);
        props.onSubmitExpenseData(expenseData);
        setEnteredTitle('');
        setAmount('');
        setDate('');
        // console.log('Reset..');
    }
    return (
      <div >
        <form onSubmit={submitHandler}>
          <label>Title: </label>
          <input
            className="Expense-form"
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            required
          />

          <label>Date: </label>
          <input
            className="Expense-form"
            type="date"
            min="2020-08-01"
            value={enteredDate}
            onChange={dateChangeHandler}
            required
          />

          <label>Amount: </label>
          <input
            className="Expense-form"
            type="number"
            min="100"
            step="10"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />

          <button type="submit" className="Expense-form__button">
            Add Expense
          </button>
        </form>
      </div>
    );

}

export default ExpenseForm;