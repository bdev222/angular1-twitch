export interface TopGame {
    id: string;
    name: string;
    box_art_url: string;
}

export interface Pagination {
    cursor: string;
}

export interface SearchTopGamesResponse {
    data: Array<TopGame>;
    pagination: Pagination;
}