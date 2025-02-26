import {useState} from 'react'

export default function Demo5() 
{
    const [num1 , setNum1] = useState (0)
    const [num2 , setNum2] = useState (0)
    const [sum , setSum] = useState (0) 
  
    const handleChange = (e) => {
        setNum1(e.target.value)
    }

    const handleChange2 = (e) => {
        setNum2(e.target.value)
    }

    const add   = () =>{
        setSum (parseFloat(num1)+parseInt(num2))
    }

  return (
    <div>
        <h3><u>Calculater App using React Hooks</u></h3>
        Enter First Number <input type='number' onChange={handleChange}/><br/>
        Enter second Number <input type='number' onChange={handleChange2}/><br/>
        <button onClick={add}>Add</button><br/>
        sum = {sum}


    </div>
  )
}
