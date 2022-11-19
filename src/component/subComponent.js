import './subComponent.css'
import ExpenseDate from './expenseDate';

function Sub(props){

// const month = props.Date.toLocaleString( 'en-US' , {month: 'long'});
// const year = props.Date.getFullYear();
// const day = props.Date.toLocaleString('en-US', {day: '2-digit'});
        
    return(
        // <div className="app">
        //     <h3>sub component</h3>
        //     <p> this sub comp kjknknknnkn nnkn lknl</p>
        // </div>
        <div className="expense-item">
            {/* <div>
              <div>{month}</div>
              <div>{day}</div>
              <div>{year}</div>
            </div> */}
           {/* <div>{props.Date }</div> */}
           {/* <h1> multiple component code</h1> */}

           <ExpenseDate date={props.Date}/>
           <div className="expense-item__description">
            | <h2>{props.title}</h2>
            <div className="expense-item">${props.amount}</div>
           </div>
      </div>
        
    );
}
export default Sub;