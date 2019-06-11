import React, { useState, useEffect }from "react"
import LogDisplay from "./LogDisplay";
import ClearLogs from "../components/ClearLogs"

export default props =>{
  let finalDiv = [];
  const [doTheStuff, setDoTheStuff] = useState(false)

  if(doTheStuff) {
    for(let i = 1; i<=localStorage.length; i++){
      finalDiv.unshift(<LogDisplay key = {i} logNumber = {i}/>)
    }
  }

useEffect(()=>{
  setDoTheStuff(true)
},[])
  
    return(
      <div>
      <div>{finalDiv}</div>
       </div>
    )
}