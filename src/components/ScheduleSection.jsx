import React from 'react';

const ScheduleSection = () => {
    return (
        <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Upcoming Schedule</h3>
            <ul className="mt-4">
                <li className="flex justify-between">
                    <span>Review candidate applications</span>
                    <span className="text-gray-500">Today, 11:30 AM</span>
                </li>
                <li className="flex justify-between mt-2">
                    <span>Interview with candidates</span>
                    <span className="text-gray-500">Today, 10:30 AM</span>
                </li>
                <li className="flex justify-between mt-2">
                    <span>Short meeting with product designer from IT Department</span>
                    <span className="text-gray-500">Yesterday, 09:15 AM</span>
                </li>
            </ul>
            <button className="mt-4 bg-red-500 px-4 py-2 rounded-lg text-white">Create a New Schedule</button>
        </div>
    );
};

export default ScheduleSection;
