import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {SearchBoxComponent} from './youtube-search/search-box.component';
import { YoutubeSearchComponent } from './youtube-search/youtube-search.component';
import {YoutubeService} from './youtube.service';
import {SearchResultComponent} from './youtube-search/search-result.component';

import {YOUTUBE_API_KEY, YOUTUBE_API_URL} from './youtube.service';



@NgModule({
  declarations: [
    AppComponent,
    YoutubeSearchComponent,
    SearchResultComponent,
    SearchBoxComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [YoutubeService, {provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY},
  {provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
