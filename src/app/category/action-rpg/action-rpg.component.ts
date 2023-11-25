import { GamesService } from 'src/app/games.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-rpg',
  templateUrl: './action-rpg.component.html',
  styleUrls: ['./action-rpg.component.scss']
})
export class ActionRpgComponent implements OnInit {

  constructor(private _gamesService: GamesService, private _ActivatedRoute: ActivatedRoute) { }
  allGames: any[] = []
  count: number = 1

  ngOnInit(): void {
    this._gamesService.getGamesCategory("action-rpg").subscribe({
      next: (data) => {
        this.allGames = data
        // console.log(data)
      }
    })
  }

}
