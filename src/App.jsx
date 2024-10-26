import { useState } from 'react'
import './App.css'
import Banner from './components/Banner.jsx/Banner'
import Navbar from './components/Navbar/Navbar'
import Toggle from './components/Toggle/Toggle'
import ChoosePlayers from './components/ChoosePlayers/ChoosePlayers'
import SelectPlayers from './components/SelectPlayers/SelectPlayers'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from './components/Footer/Footer'

function App() {
    const [balance, setBalance] = useState(0)
    const [isActive, setIsActive] = useState(true)
    const [selectPlayers, setSelectPlayers] = useState([])

    const handleFreeClaim = () => {
        setBalance(balance + 500000)
        toast.success('Free money claim Successfully')
    }

    const handleActiveBtn = (value) => [
        setIsActive(value)
    ]

    const handleChoosePlayer = (player) => {
        const isExist = selectPlayers.find(
            (selectPlayer) => selectPlayer.id === player.id
        );

        if (!isExist) {
            if (selectPlayers.length < 6) {
                if (player.price <= balance) {
                    setSelectPlayers([...selectPlayers, player]);
                    setBalance(balance - player.price)
                    toast.success(`You have added ${player.name} successfully`);
                } else {
                    toast.error("Insufficient funds. Click the button above to claim free money!");
                }
            } else {
                toast.error("Limit exceeded. You cannot add more than 6 players.");
            }
        } else {
            toast.error("This player has already been added.");
        }
    };

    const removeSelect = (playerDelete) => {
        const updatedSelectPlayers = selectPlayers.filter(player => player.id !== playerDelete.id)
        setSelectPlayers(updatedSelectPlayers)
        setBalance(balance + playerDelete.price)
        toast.info(`You have removed  -${playerDelete.name} successfully.`, { position: "top-right" })
    }
    const addMorePlayers = () => {
        setIsActive(true)
    }

    return (
        <>
            <Navbar
                balance={balance}
            ></Navbar>
            <main className='w-11/12 md:w-10/12 mx-auto'>
                <Banner
                    handleFreeClaim={handleFreeClaim}

                ></Banner>
                <Toggle
                    handleActiveBtn={handleActiveBtn}
                    isActive={isActive}
                    selectPlayers={selectPlayers}
                ></Toggle>

                <div className='mb-44'>
                    {isActive ?
                        <ChoosePlayers
                            handleChoosePlayer={handleChoosePlayer}
                        ></ChoosePlayers>
                        :
                        <SelectPlayers
                            selectPlayers={selectPlayers}
                            removeSelect={removeSelect}
                            isActive={isActive}
                            addMorePlayers={addMorePlayers}
                        ></SelectPlayers>
                    }
                </div>
            </main>
            <Footer></Footer>
            <ToastContainer position='top-center' autoClose={3000} />
        </>
    )
}

export default App
