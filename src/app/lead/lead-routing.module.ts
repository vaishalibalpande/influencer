import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeadPage } from './lead.page';
import { LocateLeadComponent } from './locate-lead/locate-lead.component';

const routes: Routes = [
  {
    path: '',
    component: LeadPage
  },
  {
    path: 'create-lead',
    loadChildren: () => import('../lead/create-lead/create-lead.module').then( m => m.CreateLeadPageModule)
  },
  {
    path: 'locate-lead',
    component: LocateLeadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeadPageRoutingModule {}
