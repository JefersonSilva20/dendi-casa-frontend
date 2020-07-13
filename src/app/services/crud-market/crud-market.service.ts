import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { BASE_URL_FIREBASE } from 'src/app/models/constants/api-url';
import { MarketModel } from 'src/app/models/market-model/market-model';

@Injectable({
  providedIn: 'root'
})
export class CrudMarketService {

  constructor(private router: Router, private angularFireAuth: AngularFireAuth, private angularFireDatabase: AngularFireDatabase) { }

  public createMarket(market: MarketModel) {
    this.angularFireAuth.onAuthStateChanged((user: firebase.User) => {
      if (user) {
        market.userUid = user.uid;
        /** CREATE */
        this.angularFireDatabase.list<MarketModel>(BASE_URL_FIREBASE).push(market)
          .then(reference => {
            reference.update({ uid: reference.key });
            this.router.navigate(['/negocio-cadastrado']);
          })
          .catch(() => alert('Desculpe, ocorreu algum erro inesperado. Tente novamente mais tarde.'));
      }
    });
  }

  public updateMarket(market: MarketModel) {
    /** UPDATE */
    this.angularFireDatabase.object<MarketModel>(`${BASE_URL_FIREBASE}/${market.uid}`)
      .update(market)
      .then(() => this.router.navigate(['/negocio-editado']))
      .catch(() => alert('Desculpe, ocorreu algum erro inesperado. Tente novamente mais tarde.'));
  }

  public deleteMarket(market: MarketModel) {
    this.angularFireDatabase.object<MarketModel>(`${BASE_URL_FIREBASE}/${market.uid}`).remove()
      .catch(() => alert('Desculpe, ocorreu algum erro inesperado. Tente novamente mais tarde.'));
  }

  public getMarketsByUser() {
    /**List markets by user */
    return this.angularFireAuth.currentUser.then((user: firebase.User) => {
      if (user) {
        return this.angularFireDatabase.list<MarketModel>(BASE_URL_FIREBASE,
          ref => ref.orderByChild('userUid').equalTo(user.uid)).valueChanges();
      }
    })
  }

  public getMarketsByCategorie(categorie: string) {
    /** LIST ALL */
    return this.angularFireDatabase.list<MarketModel>(BASE_URL_FIREBASE,
      ref => ref.orderByChild('categorie').equalTo(categorie)).valueChanges();
  }
}
