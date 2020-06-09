import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    // children:khai bao link con :
    children: [
      {
        path: ':id',
        component: YoutubePlayerComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent
  ],
  imports: [
    // import lai cai class da khai bao ben routing ;
    BrowserModule,
    [RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules})],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



