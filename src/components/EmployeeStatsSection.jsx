import React from 'react';

const EmployeeStatsSection = () => {
    return (
        <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Total Employees</h3>
                <p className="text-2xl">216</p>
                <p className="text-gray-500">120 Men, 96 Women</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Talent Request</h3>
                <p className="text-2xl">16</p>
                <p className="text-gray-500">6 Men, 10 Women</p>
            </div>
        </div>
    );
};

export default EmployeeStatsSection;
