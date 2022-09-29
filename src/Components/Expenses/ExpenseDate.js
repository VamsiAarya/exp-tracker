
import './ExpenseDate.css';

function ExpenseDate(props){

    return (
        <div className="expense-item__date"> 
            <h3>{props.date.toLocaleString('en-US',{dateStyle: 'medium'})}</h3>
        </div>

    );
}

export default ExpenseDate;