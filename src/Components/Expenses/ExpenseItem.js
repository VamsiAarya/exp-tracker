import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props){
   
    return (
        <div className="expense-item">
            
            <ExpenseDate date= {props.date}/>
            <div className="expense-item__name">
                <h3>{props.title}</h3>
            </div>

            <div className="expense-item__price">
                <h4>Rs. {props.amount}</h4>
            </div>
            
        </div>
    );
}

export default ExpenseItem;