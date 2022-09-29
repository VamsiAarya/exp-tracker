// import logo from './logo.svg';

import './App.css';
import React, {useState} from 'react';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/Form/NewExpense';
// import ChartContainer from './Components/FilterChart/ChartContainer';
import Card from './Components/UI/Card';
import Filter from "./Components/Expenses/Filter";
import ExpensesChart from './Components/Expenses/ExpensesChart';

const dummyExpenses =[
  {
    id: 'e1',
    title: "Monthly Emi",
    date : new Date(2022,7,23),
    amount: 5600
  },

  {
    id: 'e2',
    title: "Wifi bill",
    date : new Date(2022,3,24),
    amount: 700
  },

  {
    id: 'e3',
    title: "Electricity bill",
    date : new Date(2021,8,25),
    amount: 1000
  },

  {
    id: 'e4',
    title: "some bill",
    date : new Date(2020,6,25),
    amount: 1000
  },

  {
    id: 'e5',
    title: "someother bill",
    date : new Date(2020,2,25),
    amount: 1000
  },

  {
    id: 'e6',
    title: " bills",
    date : new Date(2021,5,25),
    amount: 1000
  },
  
];



function App() {
  const [expenses, addExpense] = useState(dummyExpenses);
  const addExpenseToArray = (expFromForm) => {
    // expenses.push(expFromForm);
    addExpense ( prevExpenses => {
      return [expFromForm, ...expenses];
    })
    console.log("added to array");
    // console.log(expenses);
  }

  const[yearSelected, setFilteredYear ] = useState('2020');

  const yearChangeHandler = (changedYear) => {
     console.log(changedYear);
     setFilteredYear(changedYear);
  }

  const  filteredExpenses = expenses.filter( expense => {
    let year = expense.date.getFullYear().toString();
    return year === yearSelected;
 });

  return (
    <div className="App">
      
      <NewExpense  onAddtoList = {addExpenseToArray} />
      
      <Card className="card">
        <Filter selected = {yearSelected} onYearChange = {yearChangeHandler}/>
        <ExpensesChart expenses ={filteredExpenses}/>
        <Expenses  items = {filteredExpenses} />
      </Card>
     

    </div>
  );
}

export default App;
