import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CadastreService } from 'src/app/services/cadastre/cadastre.service';

@Component({
  selector: 'app-cadastre',
  templateUrl: './cadastre.component.html',
  styleUrls: ['./cadastre.component.css']
})
export class CadastreComponent implements OnInit {

  public readonly logoImg: string;
  public form: FormGroup;

  constructor(private cadastreService: CadastreService) {
    this.logoImg = '../../../assets/logo.svg';
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.minLength(8), Validators.required])
    });
  }

  ngOnInit(): void {
  }

  cadastre() {
    this.cadastreService.createUser(this.form.controls['email'].value, this.form.controls['password'].value, this.form.controls['name'].value);
  }

}
