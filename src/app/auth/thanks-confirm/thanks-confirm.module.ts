import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThanksConfirmPageRoutingModule } from './thanks-confirm-routing.module';

import { ThanksConfirmPage } from './thanks-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThanksConfirmPageRoutingModule
  ],
  declarations: [ThanksConfirmPage]
})
export class ThanksConfirmPageModule {}
