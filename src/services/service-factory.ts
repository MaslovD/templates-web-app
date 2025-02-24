import TagService from './tag.service';
import MockTagService from './mock/tag.service';

export const getTagService = () => {
    // Convert string to boolean properly
    const useMock = import.meta.env.VITE_USE_MOCK === 'true';

    // More explicit for debugging
    console.log('Mock Service Enabled:', useMock);
    console.log('VITE_USE_MOCK value:', import.meta.env.VITE_USE_MOCK);

    return useMock ? MockTagService : TagService;
};
