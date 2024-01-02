import { Component, OnInit } from '@angular/core';
import { Loader, LoaderOptions } from 'google-maps';
import { ModalController } from '@ionic/angular';
import {LocateLeadComponent} from '../../landing/locate-lead/locate-lead.component'

@Component({
  selector: 'fundflo-create-lead',
  templateUrl: './create-lead.page.html',
  styleUrls: ['./create-lead.page.scss'],
})
export class CreateLeadPage implements OnInit {

  constructor(private modalController: ModalController) { }

  async ngOnInit() {
    const options: LoaderOptions = {/* todo */ };
    const loader = new Loader('AIzaSyD9kLGVnuDzaiB1Y1WxHFyFjYVagSu7RnY', options);
    const google = await loader.load();
    const mapdiv: any = document.getElementById('map');
    const map = new google.maps.Map(mapdiv, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
    setTimeout(()=>{
      mapdiv.style ='none'
    },1000)
    this.locateLead();
    console.log(map,map);
    
  }

  async locateLead() {
    const modal = await this.modalController.create({
      component: LocateLeadComponent,
      initialBreakpoint: 0.25,
      breakpoints: [0, 0.25, 0.5, 0.75],
      cssClass: '',
      componentProps: {
        // sort_list: this.sort_list
      }
    });
    modal.onDidDismiss()
      .then((response: any) => {
        console.log(response);
     
      });
    return await modal.present();
  }
}
