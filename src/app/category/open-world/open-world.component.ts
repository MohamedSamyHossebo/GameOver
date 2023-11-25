import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/games.service';

@Component({
  selector: 'app-open-world',
  templateUrl: './open-world.component.html',
  styleUrls: ['./open-world.component.scss']
})
export class OpenWorldComponent implements OnInit {

  constructor(private _gamesService: GamesService, private _ActivatedRoute: ActivatedRoute) { }
  allGames: any[] = []
  count: number = 1
  ngOnInit(): void {
    this._gamesService.getGamesCategory("open-world").subscribe({
      next: (data) => {
        this.allGames = data
        // console.log(data)
      }
    })
  }

}
