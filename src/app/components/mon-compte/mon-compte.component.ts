import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.scss'],
})
export class MonCompteComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  deconnexion() {
    this.router.navigateByUrl('/e-shop');
  }
}
