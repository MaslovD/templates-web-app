import React from "react";

const ExamplePage: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Sample Content</h2>
                <p className="text-gray-600">
                    This is an example of how content can be placed within the layout.
                    Replace this with your actual page content.
                </p>
            </div>
        </div>
    );
};

export default ExamplePage;
