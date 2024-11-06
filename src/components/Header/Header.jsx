import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div className="bg-tertiary text-white min-h-screen">
           <div className='max-w-container mx-auto'>
           <Navbar />
           <Hero />
           </div>
        </div>
    );
};

export default Header;
