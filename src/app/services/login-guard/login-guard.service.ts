import { Injectable, NgZone } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {

  constructor(private ngZone: NgZone,private angularFireAuth: AngularFireAuth, private router: Router) { }

  canActivate(): Promise<boolean> {
    return new Promise((resolve) => {
      this.angularFireAuth.onAuthStateChanged((user: firebase.User) => {
        if (user) {
          resolve(false);
          this.ngZone.run(() => this.router.navigate(['/home'])).then();
        } else {
          resolve(true);
        }
      });
    });
  }

}