// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/home";
import About from "./component/about"
import Admin from "./component/admin"
import Product from "./component/product"
// import Sub from './component/subComponent';

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
// function ExpenselItem(){
// // let expDate = new Date (2022,2,28);
// // let expTitle= "school fee";
// // let expAmount = 300;
// let expense =[
//   {
//     id:'e1',
//     title: 'hh school',
//     amount: 77250,
//     Date: new Date(2022,6,12)
//   },
//   {
//     id:'e2',
//     title: 'ggg school',
//     amount: 88250,
//     Date: new Date(2012,5,12)
//   },
//   {
//     id:'e3',
//     title: 'kkkk school',
//     amount: 55250,
//     Date: new Date(2033,9,12)
//   },
// ]

//   return(
//    <div>
//     <h2>let start</h2>
//          <Sub Date={expense[0].date}
//           title={expense[0].title}
//          amount={expense[0].amount}>
//          </Sub>

//          <h2>let start2</h2>
//          <Sub Date={expense[1].date}
//           title={expense[1].title}
//          amount={expense[1].amount}>
//          </Sub>

//          <h2>let start3</h2>
//          <Sub Date={expense[2].date}
//           title={expense[2].title}
//          amount={expense[2].amount}>
//          </Sub>
//    </div>

//  );
// }
// function App() {
//   return (
//     <div className="app">
//      <User name="ali" age={25} email="ali@gm.com"/>
//      <User name="sss" age={15} email="fffali@gm.com"/>
//      <User name="zzzz" age={25} email="ggali@gm.com"/>
//     </div>
//   );
// }

// const User =(props)=>{
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//       <h1>{props.email}</h1>
//     </div>
//   )
// }

// function App(){
//   const[age, setAge] =useState(0)
//   const increAge=()=>{
//     setAge(age - 1);
//   };
//   return(
//   <div className="App">
//     {age}
//     <button onClick={increAge}>increase age</button>
//   </div>
//   );
// }

//   const[inputValue, setInputValue]= useState("")
//   return(
//    <div className="App">
//     <input type="text" onChange={} {inputValue}></input>
//    </div>
//   )
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/admin" element={<Admin />} />
//         <Route path="/product/:id" element={<Product/>} />
//         <Route path="*" element={<div>not found 404</div>} />
//       </Routes>
//     </Router>
//   );
// }
// function App(){
//   let call ='alivmvk';

//   const icerNUM=()=>{
//     call ="ibahn";
//     console.log(call);
//   }
//   // console.log(call);
//   return(
//     <div>
//       <h1>{call}</h1>
//       <button className="btn" onClick={icerNUM}>click me</button>
//     </div>
//   )
// }
// export default App;
// function Example() {
  // Declare a new state variable, which we'll call "count"
  // const [count, setCount] = useState(0);
  // let [text, setText] =useState('enter text here');
  // const clickUpchange=()=>{
  //   console.log("click up chal rah hai" + text)
  //   setText("hi")
  //   // let newText = text.toUpperCase();
  //   // setText(newText);
  // }
  // const clickOnchange=(event)=>{
  //   console.log("on change")
  //   setText(event.target.value);
  // }
  // let [text, setText] =useState('enter text here');
  // return (
  //   <div>
  //     <textarea className="as" value={text} onChange={clickOnchange} id="" cols="30" rows="10"></textarea>
  //     <button onClick={clickUpchange}> clik me</button> 
  //     {/* <p>write here{text}</p>
  //     <input type="text" value={setText} /> */}
  //     {/* <p>You clicked {count} times</p>
  //     <button onClick={() => setCount(count + 1)}>
  //       Click me+++
  //     </button>
  //     <button onClick={() => setCount(count - 1)}>
  //       Click me----
  //     </button> */}
  //   </div>
//   const[inputValue,newChangeValue] =useState("hi");
//   const xyz =(event)=>{
//     const newval=event.target.value;
//     newChangeValue(newval)
//   }
//   return(
// <div>
//   <h1>{inputValue}</h1>
//   <input type="text" value={inputValue} onChange={xyz} placeholder="check"/>
// </div>
  
//   );
// }
// export default Example;

// import React from 'react'

// function App() {
//   return (
//     <div>App</div>
//   )
// }

// export default App
import React from 'react'
import Task from "./component/task";


function App() {
  const [title,setTitle ]= useState("");
  const [description,setDescription ] = useState("");
  const [tasks,setTasks] = useState([]);
  console.log(title,description);
  const submitHandler =(e)=>{
    e.preventDefault();
    setTasks([...tasks,{title, description,}
  ]);
  }

  const deleteTask=(index)=>{
    const filteredArr= tasks.filter((val,i)=>{
     return i !== index;
    });
    console.log(filteredArr);
    setTasks(filteredArr);
  }
  return (
    <div>
      <div className="nav">
        <h1>Get ready daily Goals</h1>
      </div>
      <div className="f-div">
         <form onSubmit={submitHandler} className="container">
           <input type="text" placeholder="enter your todo title" value={title} onChange={(e)=>
            setTitle(e.target.value)} />
           <textarea placeholder="Description"  value={description} onChange={(e)=>
            setDescription(e.target.value)}> </textarea>
           <button type="submit" >ADD</button>
          </form>
         {tasks.map((item,index)=>(
          <Task key={index}
           title={item.title}
           description={item.description}
           deleteTask={deleteTask}
           index={index} />
         ))}
      </div>
    </div>
  )
}

export default App;