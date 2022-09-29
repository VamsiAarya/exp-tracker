import ExpenseItem from "./ExpenseItem";

import './Expenses.css';





function items(props){
    

    let expensesContent = <p>No items found</p>;
    if(props.items.length >0) {
      expensesContent = props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        ></ExpenseItem>
      ))
    }
    return (
      <div className="expensesList">
        { expensesContent }

      </div>
    );
}


export default items;