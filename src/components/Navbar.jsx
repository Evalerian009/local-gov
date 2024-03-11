import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { navLinks } from './constants';

const Navbar = ({ menu, handleMenu}) => {
    

  return (
    <nav className='bg-emerald-900 py-3 px-8 md:px-14 lg:px-[120px] relative text-white'>
        <div className='flex justify-between items-center max-w-5xl mx-auto'>
            {/* Logo */}
            <a href="/" className='text-[1.9rem]'>
                <span className='font-bold text-white'>OGBA</span>
                <span className='text-orange-500  font-semibold text-[20px] '>DIBO</span>
            </a>

            {/* Desktop nav links */}
            <ul className='hidden lg:flex gap-6 text-[13.6px] font-semibold'>
                {navLinks.map(item => ((
                    <li key={item.id} className='hover:text-orange-500 duration-300'>
                        <a href={item.link}>{item.title}</a>
                    </li>   
                )))}
            </ul>

            {/* mobile menubar */}
            <button className='lg:hidden' onClick={handleMenu}>
                <AiOutlineMenuFold className='text-[1.6rem]' />
            </button>

            {/* Mobile menu links */}
            <ul className={`flex flex-col lg:hidden gap-6 fixed z-[11] ${menu ? 'right-0' : 'right-[-200px]'} top-0 w-[200px] bg-emerald-900 h-screen pt-12 pl-8 font-semibold duration-500`}>

                {/* Mobile menu close button */}
                <li>
                    <button>
                        <AiOutlineClose className='text-[1.6rem]' onClick={handleMenu} />
                    </button>
                </li>

                {/* Mobile menu links */}
                {navLinks.map(item => ((
                    <li key={item.id} className='hover:text-orange-500 duration-300'>
                        <a href={item.link}>{item.title}</a>
                    </li>   
                )))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar