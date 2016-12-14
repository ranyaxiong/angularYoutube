import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import {SearchResult} from './youtube-search/youtube-search.component';

export var YOUTUBE_API_KEY: string = 'AIzaSyCZbeXTny9rHJ5C5BHrCQQLmF9DMALMY6s';
export var YOUTUBE_API_URL: string = 'https://www.googleapis.com/youtube/v3/search';
//let loadingGif: string = ((<any>window).__karma__) ? '' : require('images/loading.gif');
/*export var youTubeServiceInjectables: Array<any> = [
  {provide: YoutubeService, useClass: YoutubeService},
  {provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY},
  {provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL}
];  */

@Injectable()
export class YoutubeService {

    constructor(private http: Http,
           @Inject(YOUTUBE_API_KEY) private apiKey: string,
           @Inject(YOUTUBE_API_URL) private apiUrl: string
        ) { }

        search(query: string): Observable<SearchResult[]> {
            let params: string = [
                `q=${query}`,
                `key=${this.apiKey}`,
                `part=snippet`,
                'type=video',
                `maxResults=10`
                ].join('&');
        let queryUrl: string = `${this.apiUrl}?${params}`;
        return this.http.get(queryUrl)
        .map((response: Response) => {
        return (<any>response.json()).items.map(item => {
            // console.log("raw item", item); // uncomment if you want to debug
            return new SearchResult({
                id: item.id.videoId,
                title: item.snippet.title,
                description: item.snippet.description,
                thumbnailUrl: item.snippet.thumbnails.high.url
            });
            });
        });


}
}
