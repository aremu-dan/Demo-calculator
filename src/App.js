import React from 'react'
import './App.css'
import Screen from './Screen'
import Buttons from './Buttons'

function App() {
  return (
    <div className='App'>
      <CircularDivs />
      <CalculatorContainer></CalculatorContainer>
    </div>
  )
}

const CircularDivs = () => {
  return (
    <>
      <div className='el-circular'></div>
      <div className='el-circular'></div>
    </>
  )
}

const CalculatorContainer = () => {
  return(
    <div className='app-container'>
      <Screen></Screen>
      <Buttons></Buttons>
    </div>
  )
}

export default App
