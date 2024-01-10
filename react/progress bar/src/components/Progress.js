import {useState,useEffect} from 'react';

const ProgressBar = ({value=0,onComplete=()=>{}})=>{

      const [percent,setPercent] = useState(value);

      useEffect(()=>{
        setPercent(Math.min(100,Math.max(0,value)));
        if(value >= 100){
        onComplete();
      }
      },[value])

      


      return (
      <div className = "progress">
        <span style={{color: percent<49?"black":"white"}} >{`${percent}`}%</span>
        
        <div style={{width:`${percent}%`}}></div>
        
      </div>

      )
}

export default ProgressBar;