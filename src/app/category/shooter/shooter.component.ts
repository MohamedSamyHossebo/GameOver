import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/games.service';

@Component({
  selector: 'app-shooter',
  templateUrl: './shooter.component.html',
  styleUrls: ['./shooter.component.scss']
})
export class ShooterComponent implements OnInit {

  constructor(private _gamesService: GamesService, private _ActivatedRoute: ActivatedRoute) { }
  allGames: any[] = []
  count: number = 1

  ngOnInit(): void {
    this._gamesService.getGamesCategory("shooter").subscribe({
      next: (data) => {
        this.allGames = data
        // console.log(data)
      }
    })
  }

}
