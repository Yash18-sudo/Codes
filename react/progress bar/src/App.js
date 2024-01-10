import './App.css';
import ProgressBar from './components/Progress';
import {useState, useEffect} from 'react';
function App() {

  const[value,setValue] = useState(0);
  const[success,setSuccess] = useState(false);

  useEffect(()=>{
    setInterval(()=>{
      setValue((val) => val + 1 );
    },100)
  },[]);  

  return (
    <div className="App">
      <span>ProgressBar</span>
      <ProgressBar value={value} onComplete={()=>setSuccess(true)}/>
      <span>{success?"Complete":"Loading..."}</span>
      <button>Start</button>
    </div>
  )
}

export default App;
