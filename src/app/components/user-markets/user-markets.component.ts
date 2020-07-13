import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieModel } from 'src/app/models/categorie-model/categorie-model';
import { CATEGORIES } from 'src/app/models/constants/categories';
import { MARKET_LOCAL_STORAGE } from 'src/app/models/constants/local-storage';
import { MarketModel } from 'src/app/models/market-model/market-model';
import { CrudMarketService } from 'src/app/services/crud-market/crud-market.service';

@Component({
  selector: 'app-my-markets',
  templateUrl: './user-markets.component.html',
  styleUrls: ['./user-markets.component.css']
})
export class UserMarketsComponent implements OnInit {

  public categories: Array<CategorieModel> = CATEGORIES;
  public markets: Array<MarketModel>

  constructor(private crudMarketService: CrudMarketService, private router: Router) { }

  ngOnInit(): void {
    this.crudMarketService.getMarketsByUser().then((observer)=>{
      observer.subscribe(list=> this.markets = list);
    })
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  public getImageURL(categorireName: string) {    
    let url: string = '';
    this.categories.forEach(categorie => {
      if(categorireName.toLowerCase() == categorie.name.toLowerCase()){
         url = categorie.imageURL;
      }
    });
    return url;
  }

  editMarket(market: string) {
    localStorage.setItem(MARKET_LOCAL_STORAGE,JSON.stringify(market));
    this.router.navigate(['/editar-negocio']);
  }

  deleteMarket(market: MarketModel) {
    this.crudMarketService.deleteMarket(market);
  }
}
