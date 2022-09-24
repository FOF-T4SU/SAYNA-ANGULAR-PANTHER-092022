import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitService } from 'src/app/services/produit.service';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss'],
})
export class ProduitComponent implements OnInit {
  public produits: any;
  p: number = 1;

  constructor(
    private router: Router,
    private ProduitService: ProduitService,
    private PanierService: PanierService
  ) {}

  ngOnInit(): void {
    this.ProduitService.prendreProduits().subscribe((reponse: any) => {
      this.produits = reponse;
      this.produits.forEach((a: any) => {
        Object.assign(a, { quantite: 1, total: a.prix });
      });
    });
  }

  ajouterPanier(produit: any) {
    this.PanierService.ajouterPanier(produit);
    this.router.navigateByUrl('/panier');
  }
}
