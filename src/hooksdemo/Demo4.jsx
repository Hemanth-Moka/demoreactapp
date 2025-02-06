import React, { useState , useEffect } from 'react'

export default function Demo4() {

    const [count , setCount] = useState(0)

    const increment = () =>{
        setCount(count + 1)
    }
    useEffect(() => {
      console.log("Runs On every Component Render") // No Dependency 
    });

    useEffect(() => {
        console.log("Runs On every Component Mount ") //Only One Time 
      });

      useEffect(() => {
        console.log("Runs When Count Changes ") 
      },[count]);

    

  return (
    <div>
        <h3><u>useEffect Demo</u></h3>
        <p>Count={count}</p>
        <button onClick={increment}>Increment</button>
    </div>
  )
}
