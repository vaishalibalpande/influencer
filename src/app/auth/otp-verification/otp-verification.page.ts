import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'fundflo-otp-verification',
  templateUrl: './otp-verification.page.html',
  styleUrls: ['./otp-verification.page.scss'],
})
export class OtpVerificationPage implements OnInit {
  otpForm!: FormGroup;
  response = false;
  timeLeftInSec!: number;
  disable_button = true;

  constructor(private router: Router,  
    private fb: FormBuilder,) { }

  ngOnInit() {
  }

   // otp autofocus
   move(fromtxt: any, totxt: any) {
    const length = fromtxt.length;
    let maxlength: any;
    maxlength = fromtxt.getAttribute(maxlength);
    if (length == maxlength) {
      totxt.focus();
    }
  }


   // initialize registration form
   initForm(): void {
    this.otpForm = this.fb.group({
      first: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      second: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      third: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      fourth: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
  }

  // checks for the otp input
  onInput(event: any, index: number) {
    this.getButtonStatus();

  }

  getButtonStatus() {
    if (this.otpForm.valid) {
      if (this.response && this.timeLeftInSec === 0) {
        this.disable_button = true;
      }
      else {
        this.disable_button = false;
      }
    }
    else {
      this.disable_button = true;
    }
  }

  goToConfirm(){
    this.router.navigate(['/auth/confirm']); 
  }
}
