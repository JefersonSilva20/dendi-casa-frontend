import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategorieModel } from 'src/app/models/categorie-model/categorie-model';
import { CATEGORIES } from 'src/app/models/constants/categories';
import { CrudMarketService } from 'src/app/services/crud-market/crud-market.service';


@Component({
  selector: 'app-cadastre-new-market',
  templateUrl: './cadastre-market.component.html',
  styleUrls: ['./cadastre-market.component.css']
})
export class CadastreNewMarketComponent implements OnInit {

  public readonly logoImg: string;
  public categories: Array<CategorieModel>;
  public form: FormGroup;

  constructor(private cadastreMarketService: CrudMarketService) {
    this.logoImg = '../../../assets/logo.svg';
    this.categories = CATEGORIES;
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.maxLength(128)]),
      phone: new FormControl('', [Validators.required]),
      instagram: new FormControl('', [Validators.required]),
      categorie: new FormControl('',[Validators.required,Validators.minLength(2)])
    })
  }

  ngOnInit(): void {
  }

  cadastre(): void {
    this.cadastreMarketService.createMarket(this.form.value);
  }
}
