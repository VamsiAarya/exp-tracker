import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {

    const expenseFormDataHandler = (enteredExpenseData) => {
        const expData = {
            ...enteredExpenseData
        };

        props.onAddtoList(expData);
        console.log(expData);
    }

    return (
        <div className="User-Form__Expenses">
            <ExpenseForm  onSubmitExpenseData = {expenseFormDataHandler} />
        </div>
    );
}

export default NewExpense;