import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/games.service';

@Component({
  selector: 'app-alphabetical',
  templateUrl: './alphabetical.component.html',
  styleUrls: ['./alphabetical.component.scss']
})
export class AlphabeticalComponent implements OnInit {

  constructor(private _gamesService:GamesService,private _ActivatedRoute:ActivatedRoute) { }
  allGames: any[] = []
  count: number = 1

  ngOnInit(): void {
    this._gamesService.getAllGames("alphabetical").subscribe({
      next: (data) => {
        this.allGames = data
        // console.log(data)
      }
    })
  }

}
