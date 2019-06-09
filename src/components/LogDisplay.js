import React, { useState }from "react"

export default props => {

    return (
       <div>{localStorage.getItem(props.logNumber)}</div>
    )
}
