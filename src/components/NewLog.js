import React, { useState, useEffect } from "react"
import DisplayAllLogs from "./DisplayAllLogs";
import ClearLogs from "../components/ClearLogs"

export default props => {
    const [latestLog, setLatestLog] = useState() //used to update the latest value
    let allLogs = []
    const buttonClicked = ()=>{
        const lastPoop = new Date().toLocaleDateString() + " "+new Date().toLocaleTimeString() //gets the date
        localStorage.setItem(1,lastPoop) //adds it to local
        
        allLogs.push(localStorage.getItem(2))
        allLogs.push(lastPoop)
        localStorage.setItem(2,allLogs)
        setLatestLog(lastPoop) //updates the latest on display
    }   

    useEffect(()=>{
        setLatestLog(localStorage.getItem(1));
      //  allLogs.push(localStorage.getItem(2));
    },[])

    // useEffect(()=>{
    //     allLogs.push(localStorage.getItem(2));
    // },localStorage.getItem(2))


    return(
        <div>
        <div>Your last poop was  {latestLog}</div> 
        <button
            onClick={buttonClicked} //runs the getter
        >
            New Log
        </button>
        <DisplayAllLogs/>
        <ClearLogs/>
        </div>

    )

}