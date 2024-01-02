import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateLeadPageRoutingModule } from './create-lead-routing.module';

import { CreateLeadPage } from './create-lead.page';
import { LocateLeadComponent } from '../locate-lead/locate-lead.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateLeadPageRoutingModule
  ],
  declarations: [CreateLeadPage,LocateLeadComponent]
})
export class CreateLeadPageModule {}
