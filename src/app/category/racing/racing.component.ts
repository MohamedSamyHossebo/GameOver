import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/games.service';

@Component({
  selector: 'app-racing',
  templateUrl: './racing.component.html',
  styleUrls: ['./racing.component.scss']
})
export class RacingComponent implements OnInit {

  constructor(private _gamesService: GamesService, private _ActivatedRoute: ActivatedRoute) { }
  allGames: any[] = []
  count: number = 1
  ngOnInit(): void {
    this._gamesService.getGamesCategory("racing").subscribe({
      next: (data) => {
        this.allGames = data
        // console.log(data)
      }
    })
  }

}
