import PropTypes from 'prop-types';
const Player = ({ player, handleChoosePlayer }) => {
    const { name, country, role, battingStyle, bowlingStyle, price, rating, imageUrl } = player;
    return (
        <div className="card-compact border p-3 md:p-4 rounded-2xl">
            <figure className='h-60 '>
                <img className='object-cover h-full w-full rounded-xl'
                    src={imageUrl}
                    alt="player Image" />
            </figure>
            <div className="space-y-2 md:space-y-4 mt-4">
                <div className='flex gap-4 items-center text-xl'>
                    <i className="fa-solid fa-user text-2xl"></i>
                    <h2 className="font-bold">{name}</h2>
                </div>
                <div className='flex items-center justify-between pb-4 border-b-2 text-sm md:text-base'>
                    <div className='flex gap-3 items-center text-gray-400'>
                        <i className="fa-solid fa-flag"></i>
                        <span>{country}</span>
                    </div>
                    <button className='btn btn-sm'>{role}</button>
                </div>
                <div className='flex justify-between items-center'>
                    <p className='font-bold'>Rating</p>
                    <span>{rating}</span>
                </div>
                <div className='font-bold flex justify-between'>
                    <p>{battingStyle}</p>
                    <p className='text-gray-600'>{bowlingStyle}</p>
                </div>
                <div className='flex justify-between items-center'>
                    <p className='font-bold'>$ {price}</p>
                    <button onClick={() => {
                        handleChoosePlayer(player)
                    }} className='btn btn-sm bg-white border border-lime-500 hover:bg-black hover:text-white'>Choose Player</button>
                </div>
            </div>
        </div>
    );
};

Player.propTypes = {
    handleChoosePlayer: PropTypes.func,
    player: PropTypes.object
}
export default Player;