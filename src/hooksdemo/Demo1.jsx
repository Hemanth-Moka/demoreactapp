import {useState} from 'react'

export default function Demo1() {
  const [count,setCount] = useState(0) //Number

  // count is user defined state object
  // setCount is a method to modify the count value
  // initial value is zero

  const increment = () =>{
    setCount(count+1)
  }

  const decrement = () =>{
    setCount(count-1)
  }
  return (
    <div>
        <h3><u>Counter App using react REACT HOOKs</u></h3>
        <p>count={count}</p>
  
        <button onClick={increment}>Incriment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}
