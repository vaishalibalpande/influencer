
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  //signup api
  signup(user: any): Observable<any> {
    return this.http.post(`${environment.api}/influencer/users/signup`,
      {
        "userData": user
      }
    );
  }

  //profile api
  updateProfile(user: any): Observable<any> {
    return this.http.post(`${environment.api}/influencer/users/update/${user.userMobile}`,
      {
        "userData": user
      }
    );
  }

  //profile api
  sendOtp(user: any): Observable<any> {
    return this.http.get(`${environment.api}/influencer/users/sendOtp/${user.userMobile}`);
  }

  // validateOtp
  verifyOtp(user:any): Observable<any> {

    return this.http.post(`${environment.api}/influencer/users/verifyotp/${user.userMobile}`,
    {
      "otp": user
    }
  );
}

}