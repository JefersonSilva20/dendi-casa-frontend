import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CadastreComponent } from './components/cadastre/cadastre.component';
import { UserMarketsComponent } from './components/user-markets/user-markets.component';
import { CadastreNewMarketComponent } from './components/cadastre-market/cadastre-market.component';
import { HomeComponent } from './components/home/home.component';
import { ListMarketsComponent } from './components/list-markets/list-markets.component';
import { CadastreSuccessComponent } from './components/cadastre-success/cadastre-success.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { EditMarketComponent } from './components/edit-market/edit-market.component';
import { LoginGuardService } from './services/login-guard/login-guard.service';
import { CadastreMarketSuccessComponent } from './components/cadastre-market-success/cadastre-market-success.component';
import { EditMarketSuccessComponent } from './components/edit-market-success/edit-market-success.component';


const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [LoginGuardService] },
  { path: 'cadastro', component: CadastreComponent },
  { path: 'cadastro-negocio', component: CadastreNewMarketComponent, canActivate: [AuthGuardService] },
  { path: 'editar-negocio', component: EditMarketComponent, canActivate: [AuthGuardService] },
  { path: 'home', component: HomeComponent },
  { path: 'negocios', component: ListMarketsComponent },
  { path: 'cadastro-realizado', component: CadastreSuccessComponent },
  { path: 'resetar-senha', component: ResetPasswordComponent },
  { path: 'meus-negocios', component: UserMarketsComponent, canActivate: [AuthGuardService] },
  {path:'negocio-cadastrado', component:CadastreMarketSuccessComponent},
  {path: 'negocio-editado', component:EditMarketSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
