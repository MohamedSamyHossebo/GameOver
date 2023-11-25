import { Component, OnInit } from '@angular/core';
import { observable, BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _AuthService: AuthService) { }
  isLogin: boolean = true

  ngOnInit(): void {
    this._AuthService.userData.subscribe({
      next:()=>{
        if(this._AuthService.userData.getValue() !=null){
          this.isLogin=false;
        }
        else{
          this.isLogin=true;
        }
      }
    })
  }
  signOut(){
    this._AuthService.logOut();
  }
}
