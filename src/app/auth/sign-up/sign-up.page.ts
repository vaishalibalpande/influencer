import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'fundflo-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  signupform!: FormGroup;
  submitted = false;

  constructor(private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder) {

  }

  initForm(): void {
    this.signupform = this.formBuilder.group({
      userName: ['', [Validators.required]],
      userMobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      enterpriseCode: ['', [Validators.required]],
    });
  }
  ngOnInit() {
    this.initForm();
  }

  onSignup() {
    this.submitted = true;
    for (const i in this.signupform.controls) {
      if (this.signupform.controls.hasOwnProperty(i)) {
        this.signupform.controls[i].markAsDirty();
        this.signupform.controls[i].updateValueAndValidity();
        this.signupform.controls[i].markAsTouched({ onlySelf: true });
      }
    }
    if (this.signupform.invalid) {
      return;
    }
    let user = this.signupform.value

    this.authService.signup(user)
      .subscribe({
        next: (response: any) => {
          console.log(response);
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['/auth/otp']);
        },
        error: (err) => {
          console.log(err);
        }
      });
  }
}
