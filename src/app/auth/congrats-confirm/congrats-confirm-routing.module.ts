import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CongratsConfirmPage } from './congrats-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: CongratsConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CongratsConfirmPageRoutingModule {}
