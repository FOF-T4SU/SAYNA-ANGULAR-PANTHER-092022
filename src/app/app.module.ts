import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as fr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BarNavComponent } from './components/bar-nav/bar-nav.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { EShopComponent } from './components/e-shop/e-shop.component';
import { WakandaComponent } from './components/wakanda/wakanda.component';
import { FooterComponent } from './components/footer/footer.component';
import { MonCompteComponent } from './components/mon-compte/mon-compte.component';
import { ProduitComponent } from './components/produit/produit.component';
import { PanierComponent } from './components/panier/panier.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { InfoProduitComponent } from './components/info-produit/info-produit.component';
import { EnigmeComponent } from './components/enigme/enigme.component';
import { BoutonComponent } from './components/bouton/bouton.component';
import { CommandeComponent } from './components/commande/commande.component';

@NgModule({
  declarations: [
    AppComponent,
    WakandaComponent,
    FooterComponent,
    MonCompteComponent,
    ProduitComponent,
    PanierComponent,
    InscriptionComponent,
    ConnexionComponent,
    InfoProduitComponent,
    AccueilComponent,
    EShopComponent,
    BarNavComponent,
    EnigmeComponent,
    BoutonComponent,
    CommandeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
