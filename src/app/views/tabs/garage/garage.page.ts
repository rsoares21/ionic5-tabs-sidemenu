import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-garage',
  templateUrl: './garage.page.html',
  styleUrls: ['./garage.page.scss'],
})
export class GaragePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    let isLoggedIn = sessionStorage.getItem('isLoggedIn') == "true";
    if (!isLoggedIn) this.router.navigate(['/login'])

  }

}
