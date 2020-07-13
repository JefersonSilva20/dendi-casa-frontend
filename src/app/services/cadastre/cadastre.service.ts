import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class CadastreService {

  constructor(private router: Router, private angularFireAuth: AngularFireAuth) { }

  public createUser(email: string, password: string, name: string) {
    this.angularFireAuth.createUserWithEmailAndPassword(email, password)
      .then((user: firebase.auth.UserCredential) => {
        this.updateUser(user, name);
        this.router.navigate(['/cadastro-realizado']);
      })
      .catch((reason) => {
        alert('Desculpe, ocorreu algum erro inesperado. Tente novamente mais tarde.');
      });
  }
  //update DisplayName User
  private updateUser(user: firebase.auth.UserCredential, name: string) {
    user.user.updateProfile({ displayName: name })
      .finally(() => {
        this.sendVerificationMail(user.user);
      })
      .catch(() => {
        alert('Desculpe, ocorreu algum erro inesperado. Tente novamente mais tarde.');
      });
  }

  // Send email verfificaiton when new user sign up
  public sendVerificationMail(user: firebase.User ) {
      user.sendEmailVerification().finally(() => {
        //SingnOut User create;
        this.angularFireAuth.signOut();
      })
      .catch(() => {
        alert('Desculpe, ocorreu algum erro inesperado. Tente novamente mais tarde.');
      });
  }

}
