import SelectPlayer from "./SelectPlayer";

const SelectPlayers = ({ selectPlayers, removeSelect ,isActive,addMorePlayers}) => {
    // console.log(selectPlayers)
    console.log(selectPlayers)
    return (
        <div className="flex flex-col gap-3 md:gap-6">
            {
                selectPlayers.map(player =>
                    <SelectPlayer
                        key={player.id}
                        player={player}
                        removeSelect={removeSelect}
                    ></SelectPlayer>
                )
            }
            {
                isActive? "" : <div className="flex">
                <div className='p-1 border rounded-2xl border-lime-500'>
                    <button onClick={addMorePlayers} className="border-none btn text-black bg-lime-400 hover:bg-lime-500 font-semibold rounded-xl">
                        Add more Players
                    </button>
                </div>
            </div>
            }
        </div>
    );
};

export default SelectPlayers;