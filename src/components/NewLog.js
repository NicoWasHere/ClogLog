import React, { useState }from "react"
import DisplayAllLogs from "./DisplayAllLogs";

export default props =>{

const [latestLog,getLog] = (localStorage)?useState(localStorage.getItem(1)):useState() //used to update the latest value
const buttonClicked = ()=>{
const lastPoop = new Date().toLocaleDateString() + " "+new Date().toLocaleTimeString() //gets the date
try{
localStorage.setItem(1,lastPoop) //adds it to local
}
catch(error){}
getLog(lastPoop) //updates the latest on display
}

return(
    <div>
    <div>Your last poop was  {latestLog}</div> 
    <button
        onClick={buttonClicked} //runs the getter
    >
        New Log
    </button>
</div>

)

}