import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    let isLoggedIn = sessionStorage.getItem('isLoggedIn') != null
    if (!isLoggedIn) this.router.navigate(['/login'])

  }

}
