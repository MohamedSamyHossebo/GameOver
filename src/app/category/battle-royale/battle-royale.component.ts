import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/games.service';

@Component({
  selector: 'app-battle-royale',
  templateUrl: './battle-royale.component.html',
  styleUrls: ['./battle-royale.component.scss']
})
export class BattleRoyaleComponent implements OnInit {

  constructor(private _gamesService: GamesService, private _ActivatedRoute: ActivatedRoute) { }
  allGames: any[] = []
  count: number = 1

  ngOnInit(): void {
    this._gamesService.getGamesCategory("battle-royale").subscribe({
      next: (data) => {
        this.allGames = data
        // console.log(data)
      }
    })
  }

}
