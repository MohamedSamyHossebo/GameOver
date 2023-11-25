import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/games.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  constructor(private _gamesService: GamesService, private _ActivatedRoute: ActivatedRoute) {
  }
  allGames: any[] = []
  count: number = 1
  ngOnInit(): void {
    this._gamesService.getGamesCategory("action").subscribe({
      next: (data) => {
        this.allGames = data
        // console.log(data)
      }
    })
  }


}
