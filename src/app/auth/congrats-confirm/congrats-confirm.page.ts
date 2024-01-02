import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fundflo-congrats-confirm',
  templateUrl: './congrats-confirm.page.html',
  styleUrls: ['./congrats-confirm.page.scss'],
})
export class CongratsConfirmPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToOverview() {
    this.router.navigate(['/overview']);
  }

  goToCreateLead() {
    this.router.navigate(['/lead/create-lead']);
  }

}
