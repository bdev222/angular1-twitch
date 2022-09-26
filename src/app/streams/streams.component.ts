import { Component, OnInit } from '@angular/core';
import { TwitchService } from '../twitch.service';
import { Stream } from './streams.model';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.scss']
})
export class StreamsComponent implements OnInit {
  public streams: Stream[] = [];

  constructor(private twitchService: TwitchService) { }

  ngOnInit(): void {
    this.twitchService.getStreams().subscribe((streams) => {
      this.streams = streams.data.map(val => ({
        ...val,
        thumbnail_url: val.thumbnail_url.replace('{width}x{height}', '150x150')
      }));
    });
  }

}
