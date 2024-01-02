import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThanksConfirmPage } from './thanks-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: ThanksConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThanksConfirmPageRoutingModule {}
