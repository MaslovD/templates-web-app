import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tag } from "../types/tag.types";
import { getTagService } from "../services/service-factory";
import InfoCard from "../components/InfoCard/InfoCard";

const TagDetailsPage: React.FC = () => {
    const { tag_uuid } = useParams<{ tag_uuid: string }>();
    const [tag, setTag] = useState<Tag | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const tagService = getTagService();

    useEffect(() => {
        const fetchTag = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await tagService.getTag(tag_uuid!);
                if (response.error) {
                    setError(response.error);
                } else {
                    setTag(response.data);
                }
            } catch (err) {
                setError('Failed to fetch tag details');
            } finally {
                setLoading(false);
            }
        };

        if (tag_uuid) {
            fetchTag();
        }
    }, [tag_uuid]);

    if (loading) {
        return (
            <div className="p-4">
                <div className="animate-pulse">
                    <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-4">
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                    {error}
                </div>
            </div>
        );
    }

    if (!tag) {
        return (
            <div className="p-4">
                <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded">
                    Tag not found
                </div>
            </div>
        );
    }

    return (
        <div className="p-4">
            {/* Tag Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold">Tag Details</h1>
                <p className="text-gray-600">ID: {tag.uuid}</p>
            </div>

            {/* Tag Status Info */}
            <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-lg shadow">
                    <h2 className="font-semibold text-gray-700">Status</h2>
                    <p className="text-gray-600 capitalize">{tag.status}</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                    <h2 className="font-semibold text-gray-700">Last Scan</h2>
                    <p className="text-gray-600">
                        {new Date(tag.last_scan_date).toLocaleDateString()}
                    </p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                    <h2 className="font-semibold text-gray-700">Items Count</h2>
                    <p className="text-gray-600">{tag.items.length}</p>
                </div>
            </div>

            {/* Items List */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Items</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tag.items.map((item) => (
                        <InfoCard
                            key={item.uuid}
                            name={item.name}
                            imageUrl={item.attachments[0]?.thumb_url || undefined}
                            title={`Quantity: ${item.quantity || 'N/A'}`}
                            subtitle={item.description}
                            onViewClick={() => console.log('View item:', item.uuid)}
                            onEditClick={() => console.log('Edit item:', item.uuid)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TagDetailsPage;
