import { useEffect, useState } from "react";
import Player from "./Player";

const ChoosePlayers = ({handleChoosePlayer}) => {
    const [players, setPlayers]=useState([])

    useEffect(()=>{
        fetch('./data.json')
        .then(res=>res.json())
        .then(data=>setPlayers(data))
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                players.map(player=>  
                    <Player 
                    key={player.id} 
                    player={player}
                    handleChoosePlayer={handleChoosePlayer}
                    ></Player>
                )
            }
        </div>
    );
};

export default ChoosePlayers;