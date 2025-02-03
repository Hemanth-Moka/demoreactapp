import React, { useState } from 'react'

export default function Demo3() {

    const [name , setName] = useState ("") //String
    // e means evnet
    // e.target.value means specific

    const handleChange = () => {
        // console.log(e.target.value )
        setName(e.target.value)
    }

  return (
    <div>
        <h3><u>React Hooks Demo 3</u></h3>
        Enter Name <input type = "text" id ="name"onChange={handleChange}/><br/>
        Name : {name}
    </div>
  )
}
