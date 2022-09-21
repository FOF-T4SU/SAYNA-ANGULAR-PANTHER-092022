import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WakandaComponent } from './components/wakanda/wakanda.component';
import { FooterComponent } from './components/footer/footer.component';
import { MonCompteComponent } from './components/mon-compte/mon-compte.component';
import { ProduitComponent } from './components/produit/produit.component';
import { PanierComponent } from './components/panier/panier.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { InfoProduitComponent } from './components/info-produit/info-produit.component';

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
    InfoProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
