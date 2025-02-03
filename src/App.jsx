//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import DemoClass from './components/democlass'
import DemoFunction from './components/DemoFunction'
import PropsClass from './propsdemo/PropsClass'
import PropsFunction from './propsdemo/PropsFunction'
import DemoClassState from './statedemo/DemoClassState'

function App() {
   
            const name   = "KLEF"
            const p = 100 , q  = 200
            const student  = {sid:1,sname:"Hemanth",sgender:"Male"}

  return (

        <div>
         <DemoFunction/>
         <DemoClass/>
         <PropsFunction name  = {name} p ={p} q = {q} student = {student} id ={2300030439}/>
         <PropsClass name  = {name} p ={p} q = {q} student = {student} id ={2300030439}/>
         <DemoClassState/>
        </div>
       
  )
}

export default App
