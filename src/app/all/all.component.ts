import { GamesService } from './../games.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

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
