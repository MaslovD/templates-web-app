import React from 'react';

interface InfoCardProps {
    imageUrl?: string;
    name: string;      // Main title
    title: string;     // Subtitle
    subtitle: string;  // Additional info
    onEditClick?: () => void;
    onViewClick?: () => void;
}

const UserCard: React.FC<InfoCardProps> = ({
                                               imageUrl = "/api/placeholder/100/100",
                                               name,
                                               title,
                                               subtitle,
                                               onEditClick,
                                               onViewClick
                                           }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4">
            {/* User name as title */}
            <h2 className="text-xl font-bold text-gray-800 mb-4">{name}</h2>

            {/* Main content */}
            <div className="grid grid-cols-3 gap-4 mb-4">
                {/* Left column - Image (1/3) */}
                <div className="col-span-1">
                    <div className="aspect-square rounded-full overflow-hidden">
                        <img
                            src={imageUrl}
                            alt={name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Right column - Content (2/3) */}
                <div className="col-span-2 flex flex-col justify-center">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {title}
                    </h3>
                    <p className="text-gray-600">
                        {subtitle}
                    </p>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 w-full">
                <button
                    onClick={onViewClick}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                    View
                </button>
                <button
                    onClick={onEditClick}
                    className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
                >
                    Edit
                </button>
            </div>
        </div>
    );
};

export default UserCard;
