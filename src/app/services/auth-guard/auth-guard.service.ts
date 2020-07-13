import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private ngZone: NgZone,private angularFireAuth: AngularFireAuth, private router: Router) { }

  canActivate(): Promise<boolean> {
    return new Promise((resolve) => {
      this.angularFireAuth.onAuthStateChanged(( user: firebase.User ) => {
        if(user){
          resolve(true);
        }else{
          resolve(false);
          this.ngZone.run(() => this.router.navigate(['/home'])).then();
        }
      });
    });
  }
}
