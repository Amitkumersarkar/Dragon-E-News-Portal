import logo from '../../../public/assets/logo.png'
const Header = () => {

    return (
        <div className='flex flex-col justify-center items-center gap-3 py-5'>
            <div className='logo '>
                <img className='w-[350px]' src={logo} alt="" />
            </div>
            <h2 className='text-gray-500 font-semibold'>Journalism Without Fear or Favour</h2>
            <p>this is logo section</p>
        </div>
    );
};

export default Header;