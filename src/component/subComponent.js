import './subComponent.css'

function Sub(props){
    return(
        // <div className="app">
        //     <h3>sub component</h3>
        //     <p> this sub comp kjknknknnkn nnkn lknl</p>
        // </div>
        <div className="expense-item">
        <div>March 12th 2021</div>
           <div className="expense-item__description">
            | <h2></h2>
            <div className='expense-item'>$200</div>
           </div>
      </div>
        
    );
}
export default Sub;