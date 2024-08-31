import React from 'react';

const ScheduleCard = ({ title, time }) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md mb-4">
            <div className="text-sm text-gray-600">{time}</div>
            <div className="text-lg font-semibold mt-2">{title}</div>
        </div>
    );
};

export default ScheduleCard;
