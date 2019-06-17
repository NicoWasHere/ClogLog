import React, { useState, useEffect }from "react"
import LogDisplay from "./LogDisplay";
import { css } from "@emotion/core" 


export default props =>{
  let finalDiv = [];
  const [doTheStuff, setDoTheStuff] = useState(false)

  const update = ()=>{
    props.updateFunc()
  }

  if(doTheStuff) {
    for(let i = 1; i<=localStorage.length; i++){
      finalDiv.unshift(
        <div css = {css`
        font-family: system-ui, Verdana, Geneva, sans-serif; 
        background-color: rgb(${(doTheStuff)?255*(localStorage.length-i)/localStorage.length:255},${(doTheStuff)?255*i/localStorage.length:255},82); 
        text-align: center
        color: black;
        width: 340px;
        margin: 10px auto;
        padding: 20px 0;
        position: relative;
        `}>
        <LogDisplay  updateFunc = {update} key = {i} logNumber = {i} css = {css}/>
        </div>)
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