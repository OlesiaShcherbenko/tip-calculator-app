//import { useState } from 'react'
import logo from './assets/logo.svg'
import './App.scss'
import Box from './components/Box'

function App() {

  return (
    <>
      <img src={logo} alt="" className='logo'/>
      <div className='app'>
        <Box/>
        {/* <div className='input'>
          <div className='bill'>
            <p>Bill</p>
            <Input></Input>
          </div>
          <p>Select Tip %</p>
          <p>Number of People</p>
          <Input></Input>
        </div>
        <div className='output'></div> */}
      </div>
    </>
  )
}

export default App
