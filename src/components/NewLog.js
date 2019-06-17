import React, { useState, useEffect } from "react"
import DisplayAllLogs from "./DisplayAllLogs";
import ClearLogs from "../components/ClearLogs"
import { css } from "@emotion/core" 

export default props => {
    const [update,doUpdate] = useState(true)
    const [latestLog, setLatestLog] = useState() //used to update the latest value
    const buttonClicked = ()=>{
        const lastPoop = new Date().toLocaleString("en-US", {
            weekday: "long",
            year: "2-digit",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        }) //gets the date
        if(localStorage.getItem(localStorage.length) != lastPoop){
        localStorage.setItem(localStorage.length+1,lastPoop) //adds it to local
        setLatestLog(lastPoop) //updates the latest on display
        doUpdate(!update)
        }
        else{
            alert("hey bud, your bowels need to chill")
            doUpdate(!update)
        }
    }   

    useEffect(()=>{
        setLatestLog(localStorage.getItem(localStorage.length));
    },[])


    return(
        <div>
        <div>Your last poop was  {latestLog}</div> 
        <div css = {css`
            position: fixed;
            bottom: 0;
            width: 100vw;
            padding: 10px 0;
            font-family: system-ui, Verdana, Geneva, sans-serif; 
            background-color: rgb(220,220,220); 
            text-align: center
            color: black;
            z-index: 3;
            font-size: 20px;

        `}>
        <button
            onClick={buttonClicked} //runs the getter
            css = {css`
             border-left: 1px solid black;
             border-right: 1px solid black;
             outline: none;
             background-color: transparent;
        `}
        >
            New Log
        </button>
        </div>
        <DisplayAllLogs updateFunc = {()=>{
           doUpdate(!update)
        }}/>
        <ClearLogs updateFunc = {()=>{
            
            setLatestLog("deleted")
        }} />
        </div>

    )

}