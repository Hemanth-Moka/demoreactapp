import {useState} from 'react'

export default function Demo2() {
    const [flag , setFlag] = useState(false)//boolean
    const change = () =>{
        setFlag(!flag)
    }
  return (
    <div>
        <h3><u>react Hooks Demo</u></h3>
        {
           flag?
           <p>KL University</p>:
           <p>KLEF</p>
        }
        <button onClick={change}>Change</button>
    </div>
  )
}
