import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss'],
})
export class PanierComponent implements OnInit {
  public produits: any = [];
  public prixTotal!: number;

  constructor(private panierService: PanierService) {}

  ngOnInit(): void {
    this.panierService.prendreProduits().subscribe((reponse) => {
      this.produits = reponse;
      this.prixTotal = +this.panierService.prendrePrixTotal();
    });
  }

  retirerProduit(produit: any) {
    this.panierService.retirerPanier(produit);
  }
}
