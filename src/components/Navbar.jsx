import React from 'react';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';
import { MdMessage } from "react-icons/md"
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';

const Navbar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
            <div className='flex items-center gap-2'>
                <button
                    className={`md:hidden transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    onClick={toggleSidebar}
                >
                    <span className="text-sm">{isOpen ? <RxCross2 /> : <RxHamburgerMenu />}</span>
                </button>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="hidden md:inline md:pl-10 md:pr-4 md:py-2 border rounded-lg"
                    />
                    <FaSearch className="md:absolute md:top-2.5 md:left-3 text-gray-500" />
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <FaBell className="text-gray-400" size={18} />
                <MdMessage className="text-gray-400" size={18} />
                <FaUserCircle className="text-gray-600 text-2xl" />
            </div>
        </div>
    );
};

export default Navbar;
