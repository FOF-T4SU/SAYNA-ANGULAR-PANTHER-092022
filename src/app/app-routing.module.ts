import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { EShopComponent } from './components/e-shop/e-shop.component';
import { EnigmeComponent } from './components/enigme/enigme.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { MonCompteComponent } from './components/mon-compte/mon-compte.component';
import { PanierComponent } from './components/panier/panier.component';
import { WakandaComponent } from './components/wakanda/wakanda.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'wakanda', component: WakandaComponent },
  { path: 'enigme', component: EnigmeComponent },
  { path: 'e-shop', component: EShopComponent },
  { path: 'mon-compte', component: MonCompteComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'panier', component: PanierComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
