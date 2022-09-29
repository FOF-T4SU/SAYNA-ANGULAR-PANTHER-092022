import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

/**
 * @param form
 */

function passwordsMatchValidator(form: any) {
  const password = form.get('password');
  const confirmPassword = form.get('confirmPassword');

  if (password.value === confirmPassword.value) {
    confirmPassword.setErrors({ passwordsMatch: true });
  } else {
    confirmPassword.setErrors(null);
  }
}

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
})
export class InscriptionComponent implements OnInit {
  public formInscription!: FormGroup;

  constructor(
    private FormBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formInscription = this.FormBuilder.group(
      {
        nom: ['', Validators.required],
        prenom: ['', Validators.required],
        email: ['', Validators.required, Validators.email],
        password: ['', Validators.required],
        confirmPassword: '',
      },
      { validators: passwordsMatchValidator }
    );
  }

  inscription() {
    this.http
      .post<any>(
        'https://sayna-black-panther-api.herokuapp.com/utilisateursInscrits',
        this.formInscription.value
      )
      .subscribe((reponse) => {
        alert('Vous etes inscrits');
        this.formInscription.reset();
        this.router.navigateByUrl('/connexion');
      });
  }
}
