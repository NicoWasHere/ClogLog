import React, { useState, useEffect } from "react"
export default props=>{
    const buttonClicked = () =>{
        localStorage.clear();
            props.updateFunc();
    }
    return(
        <div>
        <button
            onClick={buttonClicked} //runs the getter
        >
          Clear Logs
        </button>
        </div>

    )
}