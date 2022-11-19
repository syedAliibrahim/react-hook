// import logo from './logo.svg';
import './App.css';
import Sub from './component/subComponent';

// function App() {
//   const name =<h1>ali</h1>;
//   const age =<h2>25</h2>;
//   const user =(
//     <div>
//     {name}
//     {age}
//    </div>
//   )
//   return (
//     <div className="App">
    
//      {user}
//      {user}
//      {user}
//     </div>
//     // <h1>test2</h1>
//   );
// }
// const javascriptFuction =()=>{
//   return"javascript";
// };
// const ReactComponent =()=>{
//   return <h2>har component capital litter start karna </h2>;
// };
// function App() {
//   const str = "Hello";
//   const clickMe = (a) => {
//     alert(a);
//   };
//   return (
//     <div>
//       <h1>Main</h1>
//       {/* <Button label="One" />
//       <Button label="Two" featured={true} />
//       <Button label="Three" />

//       <Button featured={true} /> */}

//       <Button clickKar={clickMe} str={str}>
//         <span>Click</span>
//       </Button>

//       <Button clickKar={(a) => alert(a)}>Ghous</Button>
//     </div>
//   );
// }

// function App(){
//   return (
//     <div className="app-container">
//       <h2>first component</h2>
//       <p>this jkjmlv lkmkm m,dnvflknmnlknvvds fnlkjn dnvflknmnlknvvds</p>
//       <Sub className="AA"></Sub>
//     </div>
//   // <Sub></Sub>
//   );
// }
function ExpenselItem(){
// let expDate = new Date (2022,2,28);
// let expTitle= "school fee";
// let expAmount = 300;
let expense =[
  {
    id:'e1',
    title: 'hh school',
    amount: 77250,
    Date: new Date(2022,6,12)
  },
  {
    id:'e2',
    title: 'ggg school',
    amount: 88250,
    Date: new Date(2012,5,12)
  },
  {
    id:'e3',
    title: 'kkkk school',
    amount: 55250,
    Date: new Date(2033,9,12)
  },
]

  return(
   <div>
    <h2>let start</h2>
         <Sub Date={expense[0].date}
          title={expense[0].title}
         amount={expense[0].amount}>
         </Sub>

         <h2>let start2</h2>
         <Sub Date={expense[1].date}
          title={expense[1].title}
         amount={expense[1].amount}>
         </Sub>

         <h2>let start3</h2>
         <Sub Date={expense[2].date}
          title={expense[2].title}
         amount={expense[2].amount}>
         </Sub>
   </div>

 );
}

export default ExpenselItem;
