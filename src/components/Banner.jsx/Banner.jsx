import bannerImage from '../../assets/images/bg-shadow.png'
import logoImage from '../../assets/images/banner-main.png'
const Banner = ({handleFreeClaim}) => {
    return (
        <div
            className="bg-cover bg-black bg-opacity-90 bg-no-repeat rounded-3xl h-auto py-8 md:py-14 xl:py-24 my-3 md:my-7 border" style={{ backgroundImage: `url(${bannerImage})` }}>
            <div className='bg-black'></div>
            <div
             className="text-white w-11/12 md:w-8/12 text-center mx-auto  flex flex-col items-center justify-center space-y-2 md:space-y-6">
                <img className='w-32  h-24' src={logoImage} alt="crickets material images"/>
                <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='text-base md:text-xl xl:text-2xl'>Beyond Boundaries Beyond Limits</p>
                <div className='p-1 border rounded-2xl border-lime-500'>
                    <button onClick={handleFreeClaim} className="border-none btn text-black bg-lime-400 hover:bg-lime-500 font-semibold rounded-xl">
                        Claim Free Credit
                        </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;