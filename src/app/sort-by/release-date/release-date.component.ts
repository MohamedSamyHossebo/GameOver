import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/games.service';

@Component({
  selector: 'app-release-date',
  templateUrl: './release-date.component.html',
  styleUrls: ['./release-date.component.scss']
})
export class ReleaseDateComponent implements OnInit {

  constructor(private _gamesService: GamesService ,private _ActivatedRoute:ActivatedRoute) { }
  allGames: any[] = []
  count: number = 1

  ngOnInit(): void {
    this._gamesService.getAllGames("release-date").subscribe({
      next: (data) => {
        this.allGames = data
        // console.log(data)
      }
    })
  }

}
