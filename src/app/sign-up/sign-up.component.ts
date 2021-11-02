import { AuthService } from './../auth.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  errMessage = '';
  signupForm!: FormGroup;
  isSignedup =false
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      first_name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
      last_name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/),
        ],
      ],
      age: [
        null,
        [
          Validators.required,
          Validators.min(18),
          Validators.max(100)
        ],
      ],
    });
  }

  getErrors(name: string) {
    return this.signupForm.get(name)?.errors;
  }
  hide = true;
  onSubmit() {
    if (this.signupForm.valid) {
      this.authService.signUp(this.signupForm.value).subscribe(res =>{
        if (res.message == 'success'){

          this.isSignedup = true;
          this.errMessage = '';
          console.log(res)
        }else{
          this.errMessage = res.message
        }

      })
    }
  }
}
