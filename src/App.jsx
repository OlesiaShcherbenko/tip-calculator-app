//import { useState } from 'react'
import logo from './assets/logo.svg'
import './App.scss'
import Input from './components/Input'

function App() {

  return (
    <>
      <img src={logo} alt="" className='logo'/>
      <div className='app'>
        <div className='input'>
          <div className='bill'>
            <p>Bill</p>
            <Input></Input>
          </div>
          <p>Select Tip %</p>
          <p>Number of People</p>
          <Input></Input>
        </div>
        <div className='output'></div>
      </div>
    </>
  )
}

export default App
