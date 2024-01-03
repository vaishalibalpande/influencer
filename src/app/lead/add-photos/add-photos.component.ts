import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fundflo-add-photos',
  templateUrl: './add-photos.component.html',
  styleUrls: ['./add-photos.component.scss'],
})
export class AddPhotosComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  goToLeadSummary(){
  this.router.navigate(['/lead/lead-summary']);
  }
}
