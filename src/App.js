import { useState } from "react";

export default function App(){
  return(
    <div className="container">
      <h1>State Challenge</h1>
        <StepSection/>
        <CountSection/>
        <ResultSection/>
    </div>
  )
}

function StepSection(){
  const [step , setStep] = useState(1)  
  function callStepMinus(){if (step>1)setStep(s =>s - 1)}
  function callStepPlus(){if (step>=1)setStep(s =>s + 1)}
  return(
    <div className="step-section">
      <button onClick={callStepMinus}>-</button>
      <span>Step: {step}</span>
      <button onClick={callStepPlus}>+</button>
    </div>
  )
}

function CountSection(){
  const [count , setCount] = useState(0)  
  function callCountMinus(){
    if(count <= 0 || count >= 0){
      setCount(c => c - 1)
    }
  }
  function callCountPlus(){
    if(count <= 0 || count >= 0){
      setCount(c => c + 1)
    }
  }
  return(
    <div className="count-section">
      <button onClick={callCountMinus}>-</button>
      <span passingCount={count}>Count: {count}</span>
      <button onClick={callCountPlus}>+</button>
    </div>
  )
}
function ResultSection({passingCount}){
  const getYear = new Date().getFullYear();
  const getDate = new Date().getDate();
  const getMonth = new Date().getMonth();
  const getDay = new Date().getDay();
  const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec']
  
  // console.log(date);
  return(
    <div className="result-section">  
    {console.log({passingCount})}  
      
      <p> {passingCount} {days[getDay]} {months[getMonth]} {getDate} {getYear}.</p>
    </div>
 
  )
}