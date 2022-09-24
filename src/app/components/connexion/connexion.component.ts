import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss'],
})
export class ConnexionComponent implements OnInit {
  public formConnexion!: FormGroup;

  constructor(
    private FormBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formConnexion = this.FormBuilder.group({
      email: [''],
      password: [''],
    });
  }

  connexion() {
    this.http
      .get<any>('http://localhost:3000/utilisateurInscrit')
      .subscribe((reponse) => {
        const utilisateur = reponse.find((inscrits: any) => {
          return (
            inscrits.email === this.formConnexion.value.email &&
            inscrits.password === this.formConnexion.value.password
          );
        });
        if (utilisateur) {
          alert('Vous etes connecter');
          this.formConnexion.reset();
          this.router.navigateByUrl('/mon-compte');
        } else {
          alert('Veuillez vous inscrit');
        }
      });
  }
}
