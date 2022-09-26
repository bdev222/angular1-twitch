import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import Config from '../config';

export interface IRequestOptions {
    headers?: HttpHeaders;
    observe?: 'body';
    params?: HttpParams;
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
    body?: any;
}

export function customHttpClientCreator(http: HttpClient) {
    return new CustomHttpClient(http);
}

@Injectable()
export class CustomHttpClient {
    private api = Config.API_URL;
    private headers = {'Authorization':`Bearer ${Config.USER_ACCESS_OAUTH_TOKEN}`,'Client-Id':Config.CLIENT_ID};

    constructor(public http: HttpClient) {}

    /**
   * GET request
   * @param {string} endPoint it doesn't need / in front of the end point
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
    public Get<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
        let headers = new HttpHeaders();
        return this.http.get<T>(this.api + endPoint, { ...options, headers: this.headers });
    }

    /**
     * POST request
     * @param {string} endPoint end point of the api
     * @param {Object} params body of the request.
     * @param {IRequestOptions} options options of the request like headers, body, etc.
     * @returns {Observable<T>}
     */
    public Post<T>(endPoint: string, params: Object, options?: IRequestOptions): Observable<T> {
        let headers = new HttpHeaders();
        return this.http.post<T>(this.api + endPoint, params, { ...options, headers: this.headers });
    }

    /**
     * PUT request
     * @param {string} endPoint end point of the api
     * @param {Object} params body of the request.
     * @param {IRequestOptions} options options of the request like headers, body, etc.
     * @returns {Observable<T>}
     */
    public Put<T>(endPoint: string, params: Object, options?: IRequestOptions): Observable<T> {
        let headers = new HttpHeaders();
        return this.http.put<T>(this.api + endPoint, params, { ...options, headers: this.headers });
    }

    /**
     * DELETE request
     * @param {string} endPoint end point of the api
     * @param {IRequestOptions} options options of the request like headers, body, etc.
     * @returns {Observable<T>}
     */
    public Delete<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
        let headers = new HttpHeaders();
        return this.http.delete<T>(this.api + endPoint, { ...options, headers: this.headers });
    }
}