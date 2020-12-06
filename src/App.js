import React, {useState} from "react";
import './App.css';
import {Message} from "./Message"

 function App() {
  
  let [count,setCount]= useState(0);
  
  let [isMorning,setMorning] = useState(true);

  
  return (
    <div className={ `box ${ isMorning ? 'dayLight': ''}`}  >
       <div className="App"> 
       <h1>
         this is {isMorning ? "Morning" : "Night"}
       </h1>
       </div>
     {/* <button onClick={()=> isMorning ? setMorning(false) :setMorning(true)} > Opposite </button> */}
     <button onClick={()=> setMorning(!isMorning)}> Opposite</button>
     <button onClick={()=> setCount(++count)}>
    
    <b>update Count</b>
  </button>

     <h1>Hello World</h1>
     <Message counter={count}></Message>
  <b> </b>
  <br /> <br />
  
    </div>
  );
}

export default App;
