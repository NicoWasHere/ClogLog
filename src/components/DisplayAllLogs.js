import React, { useState, useEffect }from "react"
import LogDisplay from "./LogDisplay";

export default props =>{
  let finalDiv = []
  useEffect(()=>{ for(let i = 1; i<=localStorage.length; i++){
    finalDiv.push(<LogDisplay logNumber = {i}/>)
   }},[])
   for(let i = 1; i<=localStorage.length; i++){
     finalDiv.push(<LogDisplay logNumber = {i}/>)
    }
    return(
      <div>{finalDiv}</div>
    )
}