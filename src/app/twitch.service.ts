import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

import { CustomHttpClient } from 'src/app/http-client';
import { SearchChannelResponse } from './channels/channels.model';
import { SearchStreamsResponse } from "./streams/streams.model";
import { SearchTopGamesResponse } from "./top-games/top-games.model";

@Injectable({ providedIn: 'root' })
export class TwitchService {
    constructor(private http: CustomHttpClient) {}

    getChannels(query: string): Observable<SearchChannelResponse> {
        return this.http.Get<SearchChannelResponse>(`helix/search/channels?query=${query ? query : 'loseFruit'}`);
    }

    getStreams(): Observable<SearchStreamsResponse> {
        return this.http.Get<SearchStreamsResponse>('helix/streams');
    }

    getTopGames(): Observable<SearchTopGamesResponse> {
        return this.http.Get<SearchTopGamesResponse>('helix/games/top');
    }
}