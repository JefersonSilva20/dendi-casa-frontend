import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CategorieModel } from 'src/app/models/categorie-model/categorie-model';
import { CATEGORIES } from 'src/app/models/constants/categories';
import { CATEGORIE_LOCAL_STORAGE } from 'src/app/models/constants/local-storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public categories:Array<CategorieModel> = CATEGORIES;
  isShow: boolean;
  topPosToStartShowing = 100;
  name: string;

  constructor(public angularFireAuth: AngularFireAuth) {

   }

  ngOnInit(): void { }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

  setCategorie(categorieName:string){
    localStorage.setItem(CATEGORIE_LOCAL_STORAGE,categorieName);
  }
}
