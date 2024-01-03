import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddPhotosComponent } from '../add-photos/add-photos.component';

@Component({
  selector: 'fundflo-lead-details',
  templateUrl: './lead-details.component.html',
  styleUrls: ['./lead-details.component.scss'],
})
export class LeadDetailsComponent  implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  async addPhotos() {
    const modal = await this.modalController.create({
      component: AddPhotosComponent,
      initialBreakpoint: 0.25,
      breakpoints: [0, 0.25, 0.5, 0.75],
      cssClass: '',
      componentProps: {
      }
    });
    modal.onDidDismiss()
      .then((response: any) => {
        console.log(response);

      });
    return await modal.present();
  }
}
