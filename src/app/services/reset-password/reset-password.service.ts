import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  constructor(private angularFireAuth: AngularFireAuth, private router: Router) { }

  public resetPassword(email:string){
    this.angularFireAuth.sendPasswordResetEmail(email)
      .finally(()=>{this.router.navigate([''])});
  }
}
