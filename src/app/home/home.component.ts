import { GamesService } from './../games.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _gamesService: GamesService ,private _AuthService:AuthService) { }
  isLogin: boolean = false

  recommendationGames: any =""

  
  ngOnInit(): void {
    this._gamesService.getRecomGames("relevance").subscribe({
      next: (data) => {
        this.recommendationGames = data.slice(0,3)
        
      }
    });
    this._AuthService.userData.subscribe({
      next:()=>{
        if(this._AuthService.userData.getValue() !=null){
          this.isLogin=true;
        }
        else{
          this.isLogin=false;
        }
      }
    })
    
  }
  

}
