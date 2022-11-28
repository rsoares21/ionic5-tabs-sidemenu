import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.page.html',
  styleUrls: ['./exchange.page.scss'],
})
export class ExchangePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    let isLoggedIn = sessionStorage.getItem('isLoggedIn') != null
    if (!isLoggedIn) this.router.navigate(['/login'])

  }

}
