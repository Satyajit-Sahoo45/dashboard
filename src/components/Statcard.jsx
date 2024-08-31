import React from 'react';

const StatCard = ({ title, value, description, color, img = null }) => {
    return (
        <div className={`p-6 bg-${color}-100 rounded-lg shadow-md h-40 flex items-center`}>
            <div>

                <div className="text-sm text-gray-600">{title}</div>
                <div className="text-3xl font-bold">{value}</div>
                <div className="text-sm text-gray-500">{description}</div>
            </div>
            {img && (
                <img
                    src={img}
                    alt={title}
                    className="w-12 h-12 mr-4 object-cover"
                />
            )}
        </div>
    );
};

export default StatCard;
