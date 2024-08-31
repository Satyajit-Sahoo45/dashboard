import React, { useState, useEffect } from 'react';
import { SlCalender } from "react-icons/sl";
import { FaUserPlus, FaUsers, FaHeadset } from 'react-icons/fa';
import { HiHomeModern } from "react-icons/hi2";
import { FaHome } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

const Sidebar = ({ isOpen, setIsOpen, toggleSidebar }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (isMobile) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }, [isMobile]);

    return (
        <div
            className={`bg-gray-100 min-h-screen p-4 md:p-6 transition-all duration-300 ease-in-out ${isOpen ? 'w-56' : 'hidden'}`}
        >
            <div className="flex items-center justify-between text-blue-800 text-2xl font-bold mb-10 gap-2">
                <div className="flex items-center gap-2">
                    <span>{!isOpen ? 'V' : 'Vasitum'}</span>
                </div>
            </div>

            <nav>
                <ul className={`space-y-6 ${!isOpen ? 'flex flex-col items-center' : ''}`}>
                    <div className={`${!isOpen ? 'hidden' : ''}`}>
                        <h2 className="text-gray-500 text-xs font-semibold uppercase mb-4">Main Menu</h2>
                        <ul>
                            <li className="mb-6">
                                <a href="/" className="flex items-center text-red-500">
                                    <FaHome className="mr-3 text-xl" />
                                    <span className={`${!isOpen && 'hidden'} md:inline`}>Dashboard</span>
                                </a>
                            </li>
                            <li className="mb-6">
                                <a href="/" className="flex items-center text-gray-700 hover:text-red-500">
                                    <FaUserPlus className="mr-3 text-xl" />
                                    <span className={`${!isOpen && 'hidden'} md:inline`}>Recruitment</span>
                                </a>
                            </li>
                            <li className="mb-6">
                                <a href="/" className="flex items-center text-gray-700 hover:text-red-500">
                                    <SlCalender className="mr-3 text-xl" />
                                    <span className={`${!isOpen && 'hidden'} md:inline`}>Schedule</span>
                                </a>
                            </li>
                            <li className="mb-6">
                                <a href="/" className="flex items-center text-gray-700 hover:text-red-500">
                                    <FaUsers className="mr-3 text-xl" />
                                    <span className={`${!isOpen && 'hidden'} md:block`}>Employee</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className={`${!isOpen ? 'flex flex-col items-center' : ''}`}>
                        <h2 className={`text-gray-500 text-xs font-semibold uppercase mb-4 ${!isOpen ? 'hidden' : ''}`}>
                            Others
                        </h2>
                        <ul>
                            <li className="mb-6">
                                <a href="/" className="flex items-center text-gray-700 hover:text-red-500">
                                    <HiHomeModern className="mr-3 text-xl" />
                                    <span className={`${!isOpen && 'hidden'} md:inline`}>Department</span>
                                </a>
                            </li>
                            <li className="mb-6">
                                <a href="/" className="flex items-center text-gray-700 hover:text-red-500">
                                    <FaHeadset className="mr-3 text-xl" />
                                    <span className={`${!isOpen && 'hidden'} md:inline`}>Support</span>
                                </a>
                            </li>
                            <li>
                                <a href="/" className="flex items-center text-gray-700 hover:text-red-500">
                                    <IoIosSettings className="mr-3 text-xl" />
                                    <span className={`${!isOpen && 'hidden'} md:inline`}>Settings</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
