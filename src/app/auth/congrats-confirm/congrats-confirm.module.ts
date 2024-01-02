import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CongratsConfirmPageRoutingModule } from './congrats-confirm-routing.module';

import { CongratsConfirmPage } from './congrats-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CongratsConfirmPageRoutingModule
  ],
  declarations: [CongratsConfirmPage]
})
export class CongratsConfirmPageModule {}
