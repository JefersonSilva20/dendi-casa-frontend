import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResetPasswordService } from 'src/app/services/reset-password/reset-password.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  public form: FormGroup;
  constructor(private resetPasswordService: ResetPasswordService) {
    this.form = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email])
    })
  }

  ngOnInit(): void {
  }

  resetPassword(){
    this.resetPasswordService.resetPassword(this.form.get('email').value);
  }

}
