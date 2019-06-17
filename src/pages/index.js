import React from "react"
import NewLog from "../components/NewLog";
import { Helmet } from "react-helmet"
import { css } from "@emotion/core" 


export default () => (
    <div css = {css`
                text-align: center;
                font-family: system-ui, Verdana, Geneva, sans-serif; 
            `}>
                <h1>Clog Log</h1>
                <img src = "https://emojicdn.elk.sh/%F0%9F%92%A9"/>
        <Helmet>
            <title>Clog Log</title>
            <link rel = "shortcut icon" href = "/toilet.png" />
            <link rel = "apple-touch-icon" href ="/toiletIcon.png"/>
            <meta name = "apple-mobile-web-app-capable" content = "yes"/>
            <meta name = "apple-mobile-web-app-status-bar-style" content = "white"/>
        </Helmet>
        <NewLog/>
    </div>
)