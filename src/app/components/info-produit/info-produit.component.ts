import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PanierService } from 'src/app/services/panier.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-info-produit',
  templateUrl: './info-produit.component.html',
  styleUrls: ['./info-produit.component.scss'],
})
export class InfoProduitComponent implements OnInit {
  produit!: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ProduitService: ProduitService,
    private PanierService: PanierService
  ) {}

  ngOnInit(): void {
    const produitId = +this.route.snapshot.params['id'];
    this.ProduitService.prendreProduitId(produitId).subscribe(
      (reponse: any) => {
        this.produit = reponse;
      }
    );
  }

  ajouterPanier(produit: any) {
    this.PanierService.ajouterPanier(produit);
    this.router.navigateByUrl('/panier');
  }
}
