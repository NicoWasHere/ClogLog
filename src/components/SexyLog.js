import React from "react"
import SexyLogStyle from "./SexyLog.module.css"

export default ({ children }) => (
  <div className={SexyLogStyle.SexyLog}>{children}</div>
)