import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorFromLogin: string = ''

  loginForm: FormGroup = new FormGroup({

    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required]),
  })

  constructor(private _AuthService: AuthService, private _router: Router) {

  }

  ngOnInit(): void {
  }
  loginUser(form: FormGroup) {
    console.log("Hi", form)
    if (form.valid) {
        this._AuthService.signIn(form.value).subscribe({
          next: (data: any) => {
            console.log(data)
            if (data.message == "success") {
              localStorage.setItem('token',data.token)
              this._AuthService.saveUserData();
              this._router.navigate(['/home'])
            } else { this.errorFromLogin = data.message }
          }
        })

    }
  }

}
