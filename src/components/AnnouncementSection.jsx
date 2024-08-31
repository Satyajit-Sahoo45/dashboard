import React from 'react';
import { TiPin } from "react-icons/ti";
import { BsThreeDots } from "react-icons/bs";

const AnnouncementSection = ({ title, time }) => {
    return (
        <div className="flex flex-col p-4 rounded-lg shadow-md">
            <ul className="flex-1 overflow-y-auto mt-4">
                <li className="flex justify-between p-2 rounded-lg shadow-md">
                    <div className=' flex flex-col'>
                        <span>{title}</span>
                        <span className="text-gray-500">{time}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <TiPin size={25} className='text-gray-400' />
                        <BsThreeDots size={25} className='text-gray-400' />
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default AnnouncementSection;
