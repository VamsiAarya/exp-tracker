
import './Filter.css';

const Filter = (props) => {

   
    const selectChangeHandler = (event) => {
        // setYear(event.target.value);
        console.log(event.target.value);
        props.onYearChange(event.target.value);
    }

    return ( 
        <div className="filter">
            <label> Filter by year</label>
            <select value={props.selected} onChange ={selectChangeHandler}>
                <option> 2020</option>
                <option> 2021</option>
                <option> 2022</option>
            </select>
           
        </div>
    
    );
}


export default Filter;