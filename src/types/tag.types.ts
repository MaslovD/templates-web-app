// Basic item recognition interface
export interface RecognizedItem {
    make: string | null;
    name: string;
    type: string;
    brand: string | null;
    color: string;
    model: string | null;
    state: string | null;
    quantity: number;
    manufacturing_year: number | null;
}

// Attachment interface
export interface Attachment {
    uuid: string;
    mime_type: string;
    original_file_name: string;
    status: 'processed' | 'pending' | 'failed';
    created_at: string;
    url: string;
    thumb_url: string;
    recognized_items: RecognizedItem[];
}

// Tag item interface
export interface TagItem {
    uuid: string;
    name: string;
    description: string;
    quantity: number | null;
    status: 'active' | 'inactive';
    attachments: Attachment[];
    icon: string | null;
    created_at: string;
    rating: number;
}

// Main tag interface
export interface Tag {
    uuid: string;
    items: TagItem[];
    id: number;
    color: string;
    background_color: string;
    activation_date: string | null;
    expiration_date: string | null;
    status: 'stock' | 'active' | 'expired';
    description: string | null;
    name: string;
    last_scan_date: string;
    tenant_id: number | null;
    bundle: number;
}

// API Response types
export interface ApiResponse<T> {
    data: T | null;
    error?: string;
}

export interface TagResponse extends ApiResponse<Tag> {
    data: Tag | null;
}
