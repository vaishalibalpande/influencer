import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'fundflo-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profileform!: FormGroup;
  submitted = false;
  constructor(private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder) { }

  initForm(): void {
    this.profileform = this.formBuilder.group({
      userName: ['', [Validators.required]],
      userMobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      enterpriseCode: ['', [Validators.required]],

      userEmail: ['', [Validators.required]],
      userAddress: ['', [Validators.required]],
      userLocationUrl: [''],
      userOccupation: ['', [Validators.required]],
      userRegion: ['', [Validators.required]],
      userCluster: ['', [Validators.required]],
      userPrefferedDealer: ['', [Validators.required]],
      userGovIdNumber: ['', [Validators.required]],

      govId: ['', [Validators.required]],
      uploadgovId: [''],
    });
  }

  ngOnInit() {
    this.initForm();
    let user:any=localStorage.getItem('user');
    if(user){
      user=JSON.parse(user);
      this.profileform.patchValue({...user})
    }
  }

  goToThanksConfirm() {
    this.submitted = true;
    for (const i in this.profileform.controls) {
      if (this.profileform.controls.hasOwnProperty(i)) {
        this.profileform.controls[i].markAsDirty();
        this.profileform.controls[i].updateValueAndValidity();
        this.profileform.controls[i].markAsTouched({ onlySelf: true });
      }
    }
    if (this.profileform.invalid) {
      return;
    }

    let user = this.profileform.value
    this.authService.updateProfile(user)
      .subscribe({
        next: (response: any) => {
          console.log(response);
          this.router.navigate(['/auth/thanks-confirm']);
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

}
