import { Component, OnInit } from '@angular/core';

import { Channel, SearchChannelResponse } from './channels.model';
import { TwitchService } from '../twitch.service';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {
  public channels: Channel[] = [];
  public query: string = '';

  constructor(private twitchService: TwitchService) {}

  ngOnInit(): void {
    this.twitchService.getChannels(this.query).subscribe((channels: SearchChannelResponse) => {
      this.channels = channels.data;
    });
  }

  queryChange() {
    this.twitchService.getChannels(this.query).subscribe((channels: SearchChannelResponse) => {
      this.channels = channels.data;
    });
  }
}
