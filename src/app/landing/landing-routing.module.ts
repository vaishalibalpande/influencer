import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPage } from './landing.page';
import { SlidesComponent } from './slides/slides.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPage
  },
  {
    path: 'slides',
    component: SlidesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}
