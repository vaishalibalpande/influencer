import { ConfirmationPageModule } from './auth/confirmation/confirmation.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then(m => m.LandingPageModule)
  },
  {
    path: '',
    redirectTo: 'sign-up',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('././auth/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('././auth/otp-verification/otp-verification.module').then( m => m.OtpVerificationPageModule)
  },
  {
    path: 'confirm',
    loadChildren: () => import('././auth/confirmation/confirmation.module').then( m => m.ConfirmationPageModule)
  },
  {
    path: 'thanks-confirm',
    loadChildren: () => import('./././auth/thanks-confirm/thanks-confirm.module').then( m => m.ThanksConfirmPageModule)
  },
  {
    path: 'congrats-confirm',
    loadChildren: () => import('./././auth/congrats-confirm/congrats-confirm.module').then( m => m.CongratsConfirmPageModule)
  },
  {
    path: 'overview',
    loadChildren: () => import('././landing/overview/overview-routing.module').then( m => m.OverviewPageRoutingModule)
  },
    {
    path: 'create-lead',
    loadChildren: () => import('./landing/create-lead/create-lead.module').then( m => m.CreateLeadPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
