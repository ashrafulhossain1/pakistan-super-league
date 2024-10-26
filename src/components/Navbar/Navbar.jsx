import logoImage from '../../assets/images/logo.png'
import PropTypes from 'prop-types';
const Navbar = ({ balance }) => {


    return (
        <div className='sticky top-0 backdrop-blur-3xl z-40'>
            <div className="w-11/12 md:w-10/12 mx-auto flex flex-col p-1 md:flex-row justify-between items-center mt-2 md:mt-4 gap-y-2 md:gap-y-4">
                <div className='w-10 md:w-16 h-10 md:h-16'>
                    <img className='w-full ' src={logoImage} alt="" />
                </div>
                <div className='flex flex-col md:flex-row items-center gap-4 text-sm md:text-base '>
                    <ul className="flex gap-4 items-center font-medium text-gray-700">
                        <li className=""><a href="#">Home</a></li>
                        <li className=""><a href="#">Recipes</a></li>
                        <li className=""><a href="#">About</a></li>
                        <li className=""><a href="#">Contact</a></li>
                    </ul>
                    <p>
                        <button className='p-2 md:3 border-2 border-gray-400 text-black font-medium rounded-md text-xs md:text-base'>
                            {balance} Coin <i className="fa-solid fa-circle-dollar-to-slot text-yellow-600"></i></button>
                    </p>
                </div>
            </div>
        </div>
    );
};
Navbar.propTypes ={
    balance: PropTypes.number
}
export default Navbar;