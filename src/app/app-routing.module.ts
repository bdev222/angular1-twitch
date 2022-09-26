import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelsComponent } from './channels/channels.component';
import { StreamsComponent } from './streams/streams.component';
import { TopGamesComponent } from './top-games/top-games.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'channels'
  },
  {
    path: 'channels',
    component: ChannelsComponent
  },
  {
    path: 'streams',
    component: StreamsComponent
  },
  {
    path: 'top-games',
    component: TopGamesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
