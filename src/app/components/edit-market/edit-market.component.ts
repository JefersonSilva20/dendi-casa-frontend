import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategorieModel } from 'src/app/models/categorie-model/categorie-model';
import { CATEGORIES } from 'src/app/models/constants/categories';
import { MARKET_LOCAL_STORAGE } from 'src/app/models/constants/local-storage';
import { MarketModel } from 'src/app/models/market-model/market-model';
import { CrudMarketService } from 'src/app/services/crud-market/crud-market.service';

@Component({
  selector: 'app-edit-market',
  templateUrl: './edit-market.component.html',
  styleUrls: ['./edit-market.component.css']
})
export class EditMarketComponent implements OnInit {

  public readonly logoImg: string;
  public categories: Array<CategorieModel>;
  public form: FormGroup;
  public userUid: string;
  public market: MarketModel;

  constructor(private crudMarketService: CrudMarketService) {
    this.logoImg = '../../../assets/logo.svg';
    this.categories = CATEGORIES;
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.maxLength(128)]),
      phone: new FormControl('', [Validators.required]),
      instagram: new FormControl('', [Validators.required]),
      categorie: new FormControl('', [Validators.required, Validators.minLength(2)])
    })
  }

  ngOnInit(): void {
    this.market = JSON.parse(localStorage.getItem(MARKET_LOCAL_STORAGE));
    /**Load data from localStorage */
    if (this.market) {
      this.form.get('name').setValue(this.market.name);
      this.form.get('description').setValue(this.market.description);
      this.form.get('phone').setValue(this.market.phone);
      this.form.get('instagram').setValue(this.market.instagram);
      this.form.get('categorie').setValue(this.market.categorie);
    }
  }

  updateMarket(): void {
    if(this.market.uid){
      /**Update values */
      this.market.name = this.form.get('name').value;
      this.market.categorie = this.form.get('categorie').value;
      this.market.description = this.form.get('description').value;
      this.market.phone = this.form.get('phone').value;
      this.market.instagram = this.form.get('instagram').value;
      /**Update Database */
      this.crudMarketService.updateMarket(this.market);
      localStorage.setItem(MARKET_LOCAL_STORAGE, JSON.stringify(this.market))
    }
  }
}
