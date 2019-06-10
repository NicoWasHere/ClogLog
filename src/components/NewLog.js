import React, { useState, useEffect } from "react"
import DisplayAllLogs from "./DisplayAllLogs";

export default props => {
    const [latestLog, setLatestLog] = useState() //used to update the latest value
    const buttonClicked = ()=>{
        const lastPoop = new Date().toLocaleDateString() + " "+new Date().toLocaleTimeString() //gets the date
        localStorage.setItem(1,lastPoop) //adds it to local
        setLatestLog(lastPoop) //updates the latest on display
    }   

    useEffect(()=>{
        setLatestLog(localStorage.getItem(1));
    },[])


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