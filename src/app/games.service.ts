import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GamesService {
  headers = {
    'X-RapidAPI-Key': '6e7b3474a8mshcedf485abd7e80cp16ed9djsnb526ee6278e1',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
  constructor(private _httpClient: HttpClient) { }

  getGameDetails(id: string): Observable<any> {
    return this._httpClient.get
      ('https://free-to-play-games-database.p.rapidapi.com/api/game',
        {
          headers: this.headers, params:
          {
            id: id
          }
        }
      );
  }
  getRecomGames(sortby: string): Observable<any> {
    return this._httpClient.get("https://free-to-play-games-database.p.rapidapi.com/api/games", {
      params: { "sort-by": sortby },
      headers: this.headers
    })
  }

  getAllGames(sortby: string): Observable<any> {
    return this._httpClient.get("https://free-to-play-games-database.p.rapidapi.com/api/games", {
      params: { "sort-by": sortby },
      headers: this.headers
    })
  }
  getGamesCategory(category: string): Observable<any> {
    return this._httpClient.get("https://free-to-play-games-database.p.rapidapi.com/api/games",
      {
        params: { "category": category },
        headers: this.headers
      })
  }
  getGamesPlatform(Platforms: string): Observable<any> {
    return this._httpClient.get("https://free-to-play-games-database.p.rapidapi.com/api/games", {
      headers: this.headers,
      params: { "platform": Platforms }
    })
  }





}
