import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fundflo-thanks-confirm',
  templateUrl: './thanks-confirm.page.html',
  styleUrls: ['./thanks-confirm.page.scss'],
})
export class ThanksConfirmPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToCongrats(){
    this.router.navigate(['/congrats-confirm']); 
  }
 
}
