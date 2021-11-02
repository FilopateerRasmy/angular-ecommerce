import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  signinForm!: FormGroup;
  errMessage = '';
  constructor( private fb: FormBuilder, private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.signinForm =this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required] ],
    })
  }

  getErrors(name: string) {
    return this.signinForm.get(name)?.errors;
  }
  onSubmit(){
    if(this.signinForm.valid){
      this.authService.signin(this.signinForm.value).subscribe(res => {
        if(res.message == 'success'){
          localStorage.setItem('userLogin', res.token)
          this.authService.getUser()

         this.router.navigateByUrl(this.authService.redirectUrl)
        }else{
          this.errMessage = 'Invalid email or password'
        }
      })
    }
  }
}
