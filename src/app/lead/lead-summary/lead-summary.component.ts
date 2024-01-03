import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fundflo-lead-summary',
  templateUrl: './lead-summary.component.html',
  styleUrls: ['./lead-summary.component.scss'],
})
export class LeadSummaryComponent  implements OnInit {

  constructor(private router: Router) { }


  ngOnInit() {}

  goToCongrats(){
    this.router.navigate(['/auth/congrats-confirm']); 
  }
}
