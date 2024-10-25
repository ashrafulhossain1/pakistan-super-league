import { useState } from 'react'
import './App.css'
import Banner from './components/Banner.jsx/Banner'
import Navbar from './components/Navbar/Navbar'
import Toggle from './components/Toggle/Toggle'
import ChoosePlayers from './components/ChoosePlayers/ChoosePlayers'
import SelectPlayers from './components/SelectPlayers/SelectPlayers'

function App() {
  const [balance, setBalance] =useState(0)
  const [isActive,setIsActive]=useState(true)

  const handleFreeClaim =()=>{
    setBalance(balance + 500000)
  }

  const handleActiveBtn = (value)=>[
    setIsActive(value)
  ]


  return (
    <>
      <main className='w-11/12 md:w-10/12 mx-auto'>
        <Navbar
        balance={balance}
        ></Navbar>
        <Banner
        handleFreeClaim={handleFreeClaim}
        ></Banner>
        <Toggle
        handleActiveBtn={handleActiveBtn}
        isActive={isActive}
        ></Toggle>
        
        <ChoosePlayers></ChoosePlayers>
        <SelectPlayers></SelectPlayers>
        
      </main>
    </>
  )
}

export default App
