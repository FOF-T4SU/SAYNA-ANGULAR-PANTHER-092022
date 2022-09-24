import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PanierService {
  public listePanier: any = [];
  public listeProduit = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {}

  prendreProduits() {
    return this.listeProduit.asObservable();
    // return this.http.get<any>('http://localhost:3000/panier')
  }

  ajouterPanier(produit: any) {
    this.listePanier.push(produit);
    this.listeProduit.next(this.listePanier);
    this.prendrePrixTotal();
    // return this.http.post('http://localhost:3000/panier', produit)
  }

  prendrePrixTotal(): number {
    let prixTotal = 0;
    this.listePanier.map((a: any) => {
      prixTotal += +a.total;
    });
    return prixTotal;
  }

  retirerPanier(produit: any) {
    this.listePanier.map((a: any, index: any) => {
      this.listePanier.splice(index, 1);
    });
    this.listeProduit.next(this.listePanier);
  }
}
