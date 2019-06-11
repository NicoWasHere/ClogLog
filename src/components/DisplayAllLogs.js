import React, { useState, useEffect }from "react"
import LogDisplay from "./LogDisplay";
import ClearLogs from "../components/ClearLogs"

export default props =>{
  let finalDiv = [];

  if(typeof window !== undefined) {
   
    for(let i = 1; i<=localStorage.length; i++){
      finalDiv.unshift(<LogDisplay key = {i} logNumber = {i}/>)
    }
  } 
    return(
      <div>
      <div>{finalDiv}</div>
       </div>
    )
}