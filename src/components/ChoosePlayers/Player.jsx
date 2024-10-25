import React from 'react';

const Player = ({ player }) => {
    const { id, name, country, role, battingStyle, bowlingStyle, price, rating, imageUrl } = player;
    return (
        <div className="card card-compact border p-3 md:p-4 rounded-2xl">
            <figure className='w-full h-60'>
                <img className='h-60 object-cover'
                    src={imageUrl}
                    alt="player Image" />
            </figure>
            <div className="space-y-2 md:space-y-4 mt-4">
                <div className='flex gap-4 items-center text-xl'>
                    <i className="fa-solid fa-user text-2xl"></i>
                    <h2 className="font-bold">{name}</h2>
                </div>
                <div className='flex items-center justify-between pb-4 border-b-2 text-xl'>
                    <div className='flex gap-3 items-center'>
                        <i className="fa-solid fa-flag"></i>
                        <span>{country}</span>
                    </div>
                    <button className='btn btn-sm'>{role}</button>
                </div>
                <div className='flex justify-between items-center'>
                    <p className='font-bold'>Rating</p>
                    <span>8/10</span>
                </div>
                <div className='font-bold flex justify-between'>
                    <p>{battingStyle}</p>
                    <p className='text-gray-600'>{bowlingStyle}</p>
                </div>
                <div className='flex justify-between items-center'>
                    <p className='font-bold'>$ {price}</p>
                    <button className='btn btn-sm bg-white'>Choose Player</button>
                </div>
            </div>
        </div>
    );
};

export default Player;