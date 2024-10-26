const SelectPlayer = ({ player,removeSelect }) => {
    const { name, role, price, imageUrl } = player;
    return (
        <div className="p-2 md:p-4 flex justify-between items-center border border-gray-300 rounded-lg">
            <div className="flex gap-4 items-center">
                <img className="h-20 w-20 object-cover rounded-lg" src={imageUrl} alt="" />
                <div className="">
                    <h4 className="text-lg md:text-lg font-semibold">{name}</h4>
                    <h4 className="text-sm md:text-base text-gray-600">{role}</h4>
                    <h4 className="text-sm md:text-base text-gray-600">{price}</h4>
                    
                </div>
            </div>
            <div>
                <button onClick={()=>removeSelect(player)}><i className="fa-solid fa-trash-can text-3xl text-red-600"></i></button>
            </div>

        </div>
    );
};

export default SelectPlayer;