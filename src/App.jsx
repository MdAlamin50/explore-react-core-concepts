import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from './todo'
import Actor from "./Actor";
import Singers from "./Singer";

function App() {
  const actors=['sakib','shorifl Raj','Jasim','Rubel']

  const singers=[
    {id:1, name:'Dr.Mahfuzur Rahman', age:30},
    {id:2, name:'Eva Rahman', age:40},
    {id:3, name:'Shuvro Dev', age:38}
  ]
  return (
    <>
   
      <h1>Vite + React</h1>
      {
        singers.map(singer=><Singers singer={singer}></Singers>)
      }
      <Actor name="Tumi amer jan tumi ki ta jano"></Actor>
      {
      actors.map(actors =><Actor name={actors}></Actor>)
      }
      {/* <Todo  task="Learn React" isDone={true} ></Todo>
      <Todo  task="try Jsx" sDone={true}></Todo>
      <Todo  task="core concepts" sDone={true}></Todo> */}

      {/* <Device name="Laptop" price="33333"></Device>
      <Device name="mobile" price="2233"></Device>
      <Device name="watch" price="330"></Device>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student grade="8" score="90"></Student>
      <Student grade="9" score="95"></Student>
      <Student grade="10" score="100"></Student> */}
    </>
  );
}

function Device(props) {
  // console.log(props)
  return (
    <h2>this is deviece:{props.name} price:{props.price}</h2>
  );
}
function Person() {
  const age = 23;
  const price = 12;
  const person = { name: "Alamin", age: 33 };
  return (
    <h2>
      I am a {person.name} with age: {age + price}
    </h2>
  );
}

const { grade, score } = { grade: "8", score: "90" };

function Student({ grade, score }) {
  console.log(grade, score);
  const devo = {
    margin: "20px",
    padding: "30px",
    border: "3px solid purple",
    borderRadius: "20px",
  };
  return (
    <div style={devo}>
      <h3>This is a Student</h3>
      <p>Class: {grade} </p>
      <p>score: {score} </p>
    </div>
  );
}

export default App;
