import React, { useState }from "react"
import LogDisplay from "./LogDisplay";

export default props =>{
    return(
       <div>{(localStorage.getItem(2))?<div>{localStorage.getItem(2).toString()}</div>:"There are no previous logs"}</div>
        )
}