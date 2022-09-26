export interface Stream {
    id: string;
    user_id: string;
    user_login: string;
    user_name: string;
    game_id: string;
    game_name: string;
    type: string;
    title: string;
    started_at: string;
    viewer_count: string;
    is_mature: boolean;
    tags_ids: Array<string>;
    thumbnail_url: string;
    language: string;
}

export interface Pagination {
    cursor: string;
}

export interface SearchStreamsResponse {
    data: Array<Stream>;
    pagination: Pagination;
}