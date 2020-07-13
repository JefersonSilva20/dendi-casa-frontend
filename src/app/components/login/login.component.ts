import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginAuthService } from 'src/app/services/login-auth/login-auth.service';

@Component({
  selector: 'app-logon',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public logoImgSrc: string;
  public bannerImgSrc: string;
  public textButton: string;
  public title: string;
  public textLink: string;
  public form: FormGroup;
  public formAccess: string;
  public loginFail: boolean;

  constructor(private loginAuthService: LoginAuthService) {
    this.logoImgSrc = '../../../assets/logo.svg';
    this.bannerImgSrc = '../../../assets/banner.svg';
    this.textButton = 'Entrar';
    this.title = 'Faça seu Login:';
    this.textLink = 'Não tenho cadastro.';
    this.formAccess = '';
    this.loginFail = true;
    
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      formAccess: new FormControl('negociante')
    });
  }

  

  login() {
    this.loginAuthService.login(this.form.controls['email'].value, this.form.controls['password'].value)
      .then((observer:boolean) => this.loginFail = observer);
  }

  anonimousAccess() {
    this.loginAuthService.anonimousAccess();
  }

}
