import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table/';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { firebaseConfig } from 'src/environments/environment.prod';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastreMarketSuccessComponent } from './components/cadastre-market-success/cadastre-market-success.component';
import { CadastreNewMarketComponent } from './components/cadastre-market/cadastre-market.component';
import { CadastreSuccessComponent } from './components/cadastre-success/cadastre-success.component';
import { CadastreComponent } from './components/cadastre/cadastre.component';
import { EditMarketSuccessComponent } from './components/edit-market-success/edit-market-success.component';
import { EditMarketComponent } from './components/edit-market/edit-market.component';
import { HomeComponent } from './components/home/home.component';
import { ListMarketsComponent } from './components/list-markets/list-markets.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { UserMarketsComponent } from './components/user-markets/user-markets.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastreComponent,
    CadastreNewMarketComponent,
    HomeComponent,
    NavbarComponent,
    ListMarketsComponent,
    CadastreSuccessComponent,
    ResetPasswordComponent,
    EditMarketComponent,
    UserMarketsComponent,
    CadastreMarketSuccessComponent,
    EditMarketSuccessComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
