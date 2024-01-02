import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fundflo-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  getStarted(){
    this.router.navigate(['/auth/sign-up']);
  }
}
