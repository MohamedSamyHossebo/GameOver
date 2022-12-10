import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/games.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {

  constructor(private _gamesService: GamesService, private _ActivatedRoute: ActivatedRoute) { }
  allGames: any[] = []
  count: number = 1

  ngOnInit(): void {
    this._gamesService.getGamesCategory("flight").subscribe({
      next: (data) => {
        this.allGames = data
        // console.log(data)
      }
    })
  }

}
