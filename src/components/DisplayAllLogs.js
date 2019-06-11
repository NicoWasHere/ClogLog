import React, { useState, useEffect }from "react"
import LogDisplay from "./LogDisplay";
import ClearLogs from "../components/ClearLogs"

export default props =>{
  let finalDiv = ["Your bowels have exploded"];

  if(typeof window !== undefined) {
    finalDiv.pop()
    for(let i = 1; i<=localStorage.length; i++){
      finalDiv.push(<LogDisplay key = {i} logNumber = {i}/>)
    }
  }

  const updateDisplay = () =>{
    for(let i = 1; i<=localStorage.length; i++){
      finalDiv.push(<LogDisplay key = {i} logNumber = {i}/>)
    }

    console.log('i just did the thang');
  }
  
    return(
      <div>
      <div>{finalDiv}</div>
       </div>
    )
}