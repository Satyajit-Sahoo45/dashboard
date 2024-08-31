import React from 'react';

const ActivityCard = ({ time, title, description }) => {
    return (
        <div className=" bg-violet-900 text-white rounded-lg shadow-md">
            <div className="bg-violet-800 text-white p-2 rounded-t-lg w-full">
                <h2 className="text-lg text-start">Recently Activity</h2>
            </div>
            <div className='p-6'>

                <div className="mt-2">
                    <div className="text-xs text-gray-400">{time}</div>
                    <div className="text-lg font-semibold mt-2">{title}</div>
                    <div className="text-sm mt-2 text-gray-200">{description}</div>
                </div>
                <div className="mt-4">
                    <div className="text-xs text-gray-400">{time}</div>
                    <div className="text-lg font-semibold mt-2">{title}</div>
                    <div className="text-sm mt-2 text-gray-200">{description}</div>
                </div>
            </div>
        </div>
    );
};

export default ActivityCard;
