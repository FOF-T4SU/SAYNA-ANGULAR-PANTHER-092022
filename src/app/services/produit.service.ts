import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  constructor(private http: HttpClient) {}

  prendreProduits() {
    return this.http.get<any>('http://localhost:3000/produits').pipe(
      map((reponse: any) => {
        return reponse;
      })
    );
  }

  prendreProduitId(id: number) {
    return this.http.get<any>('http://localhost:3000/produits/' + id).pipe(
      map((reponse: any) => {
        return reponse;
      })
    );
  }
}
