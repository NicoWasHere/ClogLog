import React, {useState, useEffect} from "react"
import {XYPlot, LineSeries} from 'react-vis';

export default props =>{
    const [dataPoint, setDataPoint] = useState("")
    const [time, setTime] = useState(0)
    const [data,setData] = useState([
        {x: 0, y: 0},
      {x: 1, y: 0},
      {x: 2, y: 0},
      {x: 3, y: 0},
      {x: 4, y: 0},
      {x: 5, y: 0},
      {x: 6, y: 0},
      {x: 7, y: 0},
      {x: 8, y: 0},
      {x: 9, y: 0},
      {x: 10, y: 0},
      {x: 11, y: 0},
      {x: 12, y: 0},
      {x: 13, y: 0},
      {x: 14, y: 0},
      {x: 15, y: 0},
      {x: 16, y: 0},
      {x: 17, y: 0},
      {x: 18, y: 0},
      {x: 19, y: 0},
      {x: 20, y: 0},
      {x: 21, y: 0},
      {x: 22, y: 0},
      {x: 23, y: 0},
      {x: 24, y: 0}
    ])
    useEffect(()=>{
    
    for(let i = 1; i <= localStorage.length; i++){
        setDataPoint(localStorage.getItem({i}))
        setDataPoint(dataPoint.substring(dataPoint.lastIndexOf(",")+1))
   
        setTime(Number(dataPoint.substring(0,2)))
        // console.log(time)
    }},[])
    return(
        <div></div>
    )
}
