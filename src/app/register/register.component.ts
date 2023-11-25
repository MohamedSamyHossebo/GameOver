import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  errorFromSignUp: string = ''
  isLoading: boolean = false
  registerForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [Validators.minLength(3), Validators.maxLength(10), Validators.required]),
    last_name: new FormControl(null, [Validators.minLength(3), Validators.maxLength(10), Validators.required]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    age: new FormControl(null, [Validators.min(16), Validators.max(90), Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z]/)]),
  })

  constructor(private _AuthService: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  registerUser(form: FormGroup) {
    console.log("Hi", form)
    if (form.valid) {
      this.isLoading = true
      this._AuthService.signUp(form.value).subscribe({
        next: (data: any) => {
          if (data.message == "success") {
            this.isLoading = false
            this._router.navigate(['/login'])
          } else { this.errorFromSignUp = data.message }
        }
      })

    }
  }



}
