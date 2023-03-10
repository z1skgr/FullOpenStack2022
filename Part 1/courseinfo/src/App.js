import React from "react"


const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>        
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.part1} number={props.exercises1}/>
      <Part name={props.part2} number={props.exercises2}/>
      <Part name={props.part3} number={props.exercises3}/>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.number}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}





const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of component'
  const exercises3 = 14

  const sum_exercises = exercises1+exercises2+exercises3
  
  return (
    <div>

        
        <div>
          <Header course={course} />
          <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
          <Total total={sum_exercises} />
        </div>


              
        

        
    </div>
  )
}


export default App;
