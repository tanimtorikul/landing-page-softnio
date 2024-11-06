import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div className="bg-secondary text-white min-h-[90vh]">
           <div className='max-w-container mx-auto'>
               <Navbar />
               <Hero />
           </div>
        </div>
    );
};

export default Header;
