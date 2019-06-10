import React, { useState }from "react"
import DisplayAllLogs from "./DisplayAllLogs";

export default props =>{
if(window.localStorage){
const [latestLog,getLog] = useState(localStorage.getItem(1)) //used to update the latest value
}
const buttonClicked = ()=>{
const lastPoop = new Date().toLocaleDateString() + " "+new Date().toLocaleTimeString() //gets the date
if(window.localStorage){
localStorage.setItem(1,lastPoop) //adds it to local
}
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