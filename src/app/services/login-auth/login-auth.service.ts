import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  constructor(private angularFireAuth: AngularFireAuth, public router: Router,) { }

  public login(username: string, password: string): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      this.angularFireAuth.signInWithEmailAndPassword(username, password)
        .then((value: firebase.auth.UserCredential) => {
          if (value.user.emailVerified) {
            localStorage.setItem('user', value.user.displayName);
            this.router.navigate(['/home']);
            resolve(true);
          } else {
            this.sendVerificationMail(value.user);
            this.router.navigate(['']);
            resolve(false);
          }
        })
        .catch(() => {
          resolve(false);
          alert('Desculpe, ocorreu algum erro inesperado. Tente novamente mais tarde.');
        });
    })
  }
  
  private sendVerificationMail(user: firebase.User) {
      user.sendEmailVerification()
      .catch(() => {
        alert('Desculpe, ocorreu algum erro inesperado. Tente novamente mais tarde.')
      });
  }

  anonimousAccess() {
    localStorage.clear();
    this.angularFireAuth.signOut().then(() => {
      console.log('Sign-out successful.');
    }).catch(() => {
      console.log('Sign-out error.');
    }).finally(() => {
      this.router.navigate(['home']);
    });
  }

  logout() {
    localStorage.clear();
    this.angularFireAuth.signOut().then(() => {
      console.log('Sign-out successful.');
    }).catch(() => {
      console.log('Sign-out error.');
    }).finally(() => {
      this.router.navigate(['']);
    });
  }
}
