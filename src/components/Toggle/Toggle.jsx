
const Toggle = ({handleActiveBtn,isActive}) => {
    return (
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-y-2 my-4 md:my-16">
            <h4 className="text-base md:text-xl lg:text-3xl font-semibold">Available Players</h4>
            <div>
                <button onClick={()=>handleActiveBtn(true)} className=
                {`${isActive?"bg-yellow-400 py-3 px-4 border text-lg font-medium rounded-tl-lg  rounded-bl-lg ":"py-3 px-4 border text-lg font-medium rounded-tl-lg  rounded-bl-lg"}`}
                >Available</button>
                <button onClick={()=>handleActiveBtn(false)} className=
                {`${isActive?"py-3 px-4 border text-lg font-medium rounded-tr-lg rounded-br-lg" :"bg-yellow-400 py-3 px-4 border text-lg font-medium rounded-tr-lg rounded-br-lg"}`}
                >Selected (0)</button>
            </div>
        </div>
    );
};

export default Toggle;