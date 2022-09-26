import { Component, OnInit } from '@angular/core';
import { TwitchService } from '../twitch.service';
import { TopGame } from './top-games.model';

@Component({
  selector: 'app-top-games',
  templateUrl: './top-games.component.html',
  styleUrls: ['./top-games.component.scss']
})
export class TopGamesComponent implements OnInit {
  public games: TopGame[] = [];

  constructor(private twitchService: TwitchService) { }

  ngOnInit(): void {
    this.twitchService.getTopGames().subscribe((games) => {
      this.games = games.data.map(val => ({
        ...val,
        box_art_url: val.box_art_url.replace('{width}x{height}', '150x150')
      }))
    });
  }

}
