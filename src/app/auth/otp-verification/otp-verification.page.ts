import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fundflo-otp-verification',
  templateUrl: './otp-verification.page.html',
  styleUrls: ['./otp-verification.page.scss'],
})
export class OtpVerificationPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToConfirm(){
    this.router.navigate(['/confirm']); 
  }
}
