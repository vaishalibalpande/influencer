import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fundflo-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToCreateLead() {
    this.router.navigate(['/create-lead']);
  }
}
