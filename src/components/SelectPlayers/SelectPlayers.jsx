import SelectPlayer from "./SelectPlayer";
import PropTypes from 'prop-types';

const SelectPlayers = ({ selectPlayers, removeSelect, isActive, addMorePlayers }) => {
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
                isActive ? "" : <div className="flex">
                    <div className='p-1 border rounded-2xl border-lime-500'>
                        <button onClick={addMorePlayers} className="border-none btn text-black text-sm md:text-base bg-lime-400 hover:bg-lime-500 font-semibold rounded-xl">
                            Add more Players
                        </button>
                    </div>
                </div>
            }
        </div>
    );
};
SelectPlayers.propTypes = {
    selectPlayers: PropTypes.array,
    removeSelect: PropTypes.func,
    isActive: PropTypes.bool,
    addMorePlayers: PropTypes.func
}
export default SelectPlayers;