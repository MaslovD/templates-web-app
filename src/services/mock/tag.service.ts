import { Tag, ApiResponse } from '../../types/tag.types';

// Mock data based on the provided example
const MOCK_TAG: Tag = {
    "uuid": "9d69f075-883a-4986-b0fa-5d291f31ed24",
    "items": [
        {
            "uuid": "ce937cad-c8e5-40eb-a54f-f08147082869",
            "name": "this item has now name",
            "description": "new description-14-10",
            "quantity": 45,
            "status": "active",
            "attachments": [
                {
                    "uuid": "3880f01c-3ddf-419d-91dd-8b6a72f15d46",
                    "mime_type": "image/jpeg",
                    "original_file_name": "work-desk-icon-vector-22623323.jpeg",
                    "status": "processed",
                    "created_at": "2024-10-23T01:21:02.115216Z",
                    "url": "https://app.movetagger.com/tags/9d69f075-883a-4986-b0fa-5d291f31ed24/attachments/3880f01c-3ddf-419d-91dd-8b6a72f15d46.jpeg",
                    "thumb_url": "https://app.movetagger.com/tags/9d69f075-883a-4986-b0fa-5d291f31ed24/attachments/3880f01c-3ddf-419d-91dd-8b6a72f15d46-thumb.jpeg",
                    "recognized_items": [
                        {
                            "make": null,
                            "name": "Desk",
                            "type": "Furniture",
                            "brand": null,
                            "color": "unknown",
                            "model": null,
                            "state": null,
                            "quantity": 1,
                            "manufacturing_year": null
                        }
                        // ... other recognized items
                    ]
                }
            ],
            "icon": null,
            "created_at": "2024-10-23T01:21:57.531780Z",
            "rating": 5
        }
        // ... other items
    ],
    "id": 1,
    "color": "#000000",
    "background_color": "#FFFFFF",
    "activation_date": null,
    "expiration_date": null,
    "status": "stock",
    "description": null,
    "name": "",
    "last_scan_date": "2025-02-24T02:58:43.185726Z",
    "tenant_id": null,
    "bundle": 2
};

export class MockTagService {
    private static instance: MockTagService;

    private constructor() {}

    static getInstance(): MockTagService {
        if (!MockTagService.instance) {
            MockTagService.instance = new MockTagService();
        }
        return MockTagService.instance;
    }

    async getTag(uuid: string): Promise<ApiResponse<Tag>> {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));

        if (uuid === MOCK_TAG.uuid) {
            return { data: MOCK_TAG };
        }

        return {
            data: null,
            error: 'Tag not found'
        };
    }

    async updateTag(uuid: string, tagData: Partial<Tag>): Promise<ApiResponse<Tag>> {
        await new Promise(resolve => setTimeout(resolve, 500));

        if (uuid === MOCK_TAG.uuid) {
            return {
                data: {
                    ...MOCK_TAG,
                    ...tagData
                }
            };
        }

        return {
            data: null,
            error: 'Tag not found'
        };
    }
}

export default MockTagService.getInstance();
