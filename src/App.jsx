//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import DemoClass from './components/democlass'
import DemoFunction from './components/DemoFunction'
import PropsClass from './propsdemo/PropsClass'
import PropsFunction from './propsdemo/PropsFunction'
import DemoClassState from './statedemo/DemoClassState'
import Demo1 from './hooksdemo/Demo1'
import Demo2 from './hooksdemo/Demo2'
import Demo3 from './hooksdemo/Demo3'
import Demo4 from './hooksdemo/Demo4'
import Demo5 from './hooksdemo/Demo5'

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
         <Demo1/>
         <Demo2></Demo2>
         <Demo3/>
         <Demo4/>
         <Demo5/>
         
        </div>
       
  )
}

export default App
