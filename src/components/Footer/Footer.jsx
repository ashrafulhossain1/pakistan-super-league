import footerImage from '../../assets/images/logo-footer.png'
import footerbg from '../../assets/images/bg-shadow.png'
const Footer = () => {
    return (
        <div className='w-full bg-gray-900 '>
            <footer className="pt-36 sm:pt-52 w-11/12 md:w-10/12 mx-auto relative">
                {/*footer search option */}
                <div className=' absolute w-9/12 -top-28 md:-top-32 -translate-x-1/2 left-1/2 bg-white rounded-lg md:rounded-3xl  bg-opacity-5 border border-gray-500 p-2 md:p-4'> 
                    <div className=' p-4 md:p-10 mx-auto text-center bg-white border border-black rounded-md md:rounded-2xl'

                        style=
                        {{ backgroundImage: `url(${footerbg})`,
                         backgroundSize: 'cover', backgroundPosition: 'center'
                         }}>

                        <div className='w-full sm:w-10/12 lg:w-1/2 space-y-2 text-center mx-auto '>
                            <h3 className='text-lg md:text-xl lg:text-3xl font-bold'>
                                Subscribe to our Newsletter
                            </h3>
                            <p className='text-gray-600 text-sm md:text-base'>
                                Get the latest updates and news right in your inbox!
                            </p>
                            <label className="flex h-8 md:h-10 items-center mt-3 justify-center">
                                <input type="text" className="p-2 h-full w-full mr-4 border rounded-md text-[8px] md:text-base" placeholder="Enter Your Email" />
                                <button className='bg-lime-500 h-full p-2 md:px-4 rounded-md font-semibold text-white bg-gradient-to-r from-yellow-400 to-fuchsia-600 text-[10px] md:text-base '>Subscribe</button>
                            </label>
                        </div>
                    </div>
                </div>

                <img  src={footerImage} alt="cricket logo" className='mx-auto' />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10  text-slate-400 p-3 md:p-10 ">
                    <nav>
                        <h6 className="mb-3 text-white">Services</h6>
                        <p>
                            We are a passionate team dedicated to providing the best services to our customers.
                        </p>
                    </nav>
                    <nav className='flex flex-col'>
                        <h6 className="mb-3 text-white">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav className='flex flex-col'>
                        <h6 className="mb-3 text-white">Social</h6>
                        <p>Subscribe to our newsletter for the latest updates.</p>
                        <label className="flex h-10 items-center mt-3">
                            <input type="text" className="h-full w-3/4 p-3 rounded-tl-md rounded-bl-md text-xs md:text-base" placeholder="Enter Your Email" />
                            <button className='bg-lime-500 h-full px-4 rounded-tr-md rounded-br-md font-semibold text-white bg-gradient-to-r from-yellow-400 to-fuchsia-600 text-xs md:text-base'>Subscribe</button>
                        </label>
                    </nav>
                </div>
            </footer>
            <div className='border-b-2 border-gray-700'></div>
            {/* footer copyright */}
            <div className="bg-gray-900 p-10 text-center text-sm text-gray-400">
                @2024 Your Company All Rights Reserved.
            </div>
        </div>
    );
};

export default Footer;