import {TagResponse} from '../types/tag.types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export class TagService {
    private static instance: TagService;

    private constructor() {
    }

    static getInstance(): TagService {
        if (!TagService.instance) {
            TagService.instance = new TagService();
        }
        return TagService.instance;
    }

    async getTag(uuid: string): Promise<TagResponse> {
        try {
            const response = await fetch(`/api/v1/tags/${uuid}`);

            if (!response.ok) {
                return {
                    data: null,
                    error: `Error fetching tag: ${response.statusText}`
                };
            }

            const data = await response.json();
            return {data};
        } catch (error) {
            return {
                data: null,
                error: error instanceof Error ? error.message : 'An error occurred'
            };
        }
    }

    // ... rest of the service methods
}

export default TagService.getInstance();
