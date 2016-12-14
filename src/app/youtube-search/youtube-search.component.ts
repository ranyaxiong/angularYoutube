import { Component, OnInit, Injectable,
        ElementRef, Inject, EventEmitter } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs';

export class SearchResult {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string
 /* constructor(result) {
      this.id = result.id;
      this.title = result.title;
      this.description = result.description;
      this.thumbnailUrl = result.thumbnailUrl;
      this.videoUrl  = result.videoUrl;
    }   */
  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.title = obj && obj.title || null;
    this.description = obj && obj.description || null;
    this.thumbnailUrl = obj && obj.thumbnailUrl || null;
    this.videoUrl = obj && obj.videoUrl || `https://www.youtube.com/watch?v=${this.id}`;
  }
   }

@Component({
  selector: 'app-youtube-search',
  templateUrl: './youtube-search.component.html',
  styleUrls: ['./youtube-search.component.css']
})
export class YoutubeSearchComponent implements OnInit {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  results: SearchResult[];


 updateResults(results: SearchResult[]): void {
  this.results = results;
  // console.log("results:", this.results); // uncomment to take a look
 }
  ngOnInit () {}
}
