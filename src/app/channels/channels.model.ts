export interface Channel {
    broadcaster_language: string;
    broadcaster_login: string;
    display_name: string;
    game_id: string;
    game_name: string;
    id: string;
    is_live: boolean;
    tags_ids: Array<string>;
    thumbnail_url: string;
    title: string;
    started_at: string;
}

export interface Pagination {
    cursor: string;
}

export interface SearchChannelResponse {
    data: Array<Channel>;
    pagination: Pagination;
}