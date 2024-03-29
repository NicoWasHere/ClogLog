import React from "react"
import { css } from "@emotion/core" 
export default props=>{
    const buttonClicked = () =>{
        if(window.confirm("Are you sure you want to clear ALL logs?")) {
        localStorage.clear();
            props.updateFunc();
        }
    }
    return(
        <div>
        <button css = {css`
        font-family: system-ui, Verdana, Geneva, sans-serif; 
        background-color: rgb(220,220,220); 
        text-align: center
        color: black;
        width: 170px;
        margin: 0px auto;
        padding: 10px 0;
        position: relative;
        font-size: 20px;
        `}
            onClick={buttonClicked} //runs the getter
        >
          Clear Logs
        </button>
        </div>

    )
}