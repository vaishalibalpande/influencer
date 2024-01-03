import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateLeadPageRoutingModule } from './create-lead-routing.module';

import { CreateLeadPage } from './create-lead.page';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoogleMapsModule,
    CreateLeadPageRoutingModule,

  ],
  declarations: [CreateLeadPage]
})
export class CreateLeadPageModule {}
