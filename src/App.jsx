import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() { 
  return (
    <>  
      <h1>Vite + React</h1>   
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student></Student>
                  
    </>
  )
}
function Person(){
  const age =23;
  const price=12;
  const person ={name:'Alamin', age:33}
  return <h2>I am a {person.name} with age:    {age+price}</h2>
}

function Student(){
  return (
  <div>
    <h3>This is a Student</h3>
    <p>name:MD.Alamin</p>
    <p>age:20 yers</p>
  </div>
  )
}

export default App
