import { Component, OnInit, ViewChild } from '@angular/core';
import { GooglePlaceDirective } from '../../shared/google-places/ngx-google-places-autocomplete.directive';
import { ComponentRestrictions } from '../../shared/google-places/objects/options/componentRestrictions';
import { Address } from '../../shared/google-places/objects/address';

import { ModalController } from '@ionic/angular';
import { LeadDetailsComponent } from '../lead-details/lead-details.component';
import { LeadService } from '../lead-service';

declare const google: any;
@Component({
  selector: 'fundflo-locate-lead',
  templateUrl: './locate-lead.component.html',
  styleUrls: ['./locate-lead.component.scss'],
})
export class LocateLeadComponent implements OnInit {
  constructor(private leadService: LeadService,
    private modalController: ModalController) { }

  @ViewChild("places") places!: GooglePlaceDirective;

  ngOnInit() {
    this.getRestrictions();
  }
  onClose() {

  }

  address(address: Address) {
    console.log(address);
    const lat = address.geometry.location.lat();
    const lng = address.geometry.location.lng();
    this.leadService.updateAddress({ lat, lng })
  }

  getRestrictions() {
    let country = 'India';
    const _self = this;
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode(
      { address: country },
      (results: any, status: any) => {
        if (status == google.maps.GeocoderStatus.OK) {
          const _bounds = results[0].geometry.bounds;
          for (const element of results[0].address_components) {
            if (element.long_name == country) {
              const _country = element.short_name;
              _self.changeConfig(_bounds, _country);
            }
          }
        }
      }
    );
  }

  public changeConfig(bounds: any, country: any) {
    this.places.options.bounds = bounds;
    this.places.options.componentRestrictions = new ComponentRestrictions({
      country: country,
    });
    this.places.reset();
  }


  async leadDetails() {
    const modal = await this.modalController.create({
      component: LeadDetailsComponent,
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













