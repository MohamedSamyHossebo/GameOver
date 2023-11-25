import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/games.service';

@Component({
  selector: 'app-popularity',
  templateUrl: './popularity.component.html',
  styleUrls: ['./popularity.component.scss']
})
export class PopularityComponent implements OnInit {

  constructor(private _gamesService: GamesService ,private _ActivatedRoute:ActivatedRoute) { }
  allGames: any[] = []
  count: number = 1

  ngOnInit(): void {
    this._gamesService.getAllGames("popularity").subscribe({
      next: (data) => {
        this.allGames = data
        // console.log(data)
      }
    })
  }

}
