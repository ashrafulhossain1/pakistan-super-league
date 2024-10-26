
import PropTypes from 'prop-types';
const Toggle = ({ handleActiveBtn, isActive, selectPlayers }) => {

    return (
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-y-2 my-4 md:my-16">
            <h4 className="text-base md:text-xl lg:text-3xl font-bold">
                {isActive ? "Available Players" : `Selected Player (${selectPlayers.length}/6)`}
            </h4>
            <div>
                <button onClick={() => handleActiveBtn(true)} className=
                    {`${isActive ? "bg-yellow-400 py-3 px-4 border text-base md:text-lg font-medium rounded-tl-lg  rounded-bl-lg " : "py-3 px-4 border text-base md:text-lg font-medium rounded-tl-lg  rounded-bl-lg"}`}
                >Available</button>
                <button onClick={() => handleActiveBtn(false)} className=
                    {`${isActive ? "py-3 px-4 border text-base md:text-lg font-medium rounded-tr-lg rounded-br-lg" : "bg-yellow-400 py-3 px-4 border text-base md:text-lg font-medium rounded-tr-lg rounded-br-lg"}`}
                >Selected({selectPlayers.length})</button>
            </div>
        </div>
    );
};

Toggle.propTypes={
    handleActiveBtn: PropTypes.func,
    isActive: PropTypes.bool,
    selectPlayers: PropTypes.array

}

export default Toggle;