import React from "react"
import { css } from "@emotion/core" 

export default props => {

    const onButtonClicked = () =>{
        if(window.confirm("Are you sure you'd like to delete this?")) {
            for(let i = props.logNumber; i<localStorage.length; i++){
                localStorage.setItem(i,localStorage.getItem(i+1))
            }
            localStorage.removeItem(localStorage.length)
            props.updateFunc()
        }
    }

    return (
        <div css = {css`
            `}><div>{localStorage.getItem(props.logNumber)}{' '}</div>
            <button 
                onClick = {onButtonClicked}
                css = {css`
                background-color: transparent;
                border: none;
                margin-right: 0;
                position: absolute;
                right: 0;
                z-index: 1;
                top: 10px;
                `}
            >
            {/* <img src = "/toilet.png" width = "10" height = "10" /> */}
            X
            
        </button>
       </div>
    )
}
