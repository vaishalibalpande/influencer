import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sign-up',
    loadChildren: () => import('././sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('././otp-verification/otp-verification.module').then( m => m.OtpVerificationPageModule)
  },
  {
    path: 'confirm',
    loadChildren: () => import('././confirmation/confirmation.module').then( m => m.ConfirmationPageModule)
  },
  {
    path: 'thanks-confirm',
    loadChildren: () => import('././thanks-confirm/thanks-confirm.module').then( m => m.ThanksConfirmPageModule)
  },
  {
    path: 'congrats-confirm',
    loadChildren: () => import('././congrats-confirm/congrats-confirm.module').then( m => m.CongratsConfirmPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
