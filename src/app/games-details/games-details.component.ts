import { ActivatedRoute } from '@angular/router';
import { GamesService } from './../games.service';
import { Component, OnInit } from '@angular/core';
import { GamesDetails } from '../games-details';


@Component({
  selector: 'app-games-details',
  templateUrl: './games-details.component.html',
  styleUrls: ['./games-details.component.scss']
})
export class GamesDetailsComponent implements OnInit {
  gameDetails: any = {}

  constructor(private _ActivatedRoute: ActivatedRoute, private _GamesService: GamesService) {
    let { id } = this._ActivatedRoute.snapshot.params;
    this.getGamesDetails(id)
  }


  getGamesDetails(id: string) {
    this._GamesService.getGameDetails(id).subscribe({
      next: (res) => {
        this.gameDetails = res
        console.log(this.gameDetails)
      }
    })
  }

  ngOnInit(): void {
  }

}
