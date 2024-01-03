import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeadPageRoutingModule } from './lead-routing.module';

import { LeadPage } from './lead.page';
import { LocateLeadComponent } from './locate-lead/locate-lead.component';
import { LeadDetailsComponent } from './lead-details/lead-details.component';
import { AddPhotosComponent } from './add-photos/add-photos.component';
import { LeadSummaryComponent } from './lead-summary/lead-summary.component';
import { GooglePlaceModule } from '../shared/google-places/ngx-google-places-autocomplete.module';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoogleMapsModule,
    GooglePlaceModule,
    LeadPageRoutingModule
  ],
  declarations: [LeadPage,LocateLeadComponent,LeadDetailsComponent,AddPhotosComponent,LeadSummaryComponent]
})
export class LeadPageModule {}
