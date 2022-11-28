import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-office',
  templateUrl: './office.page.html',
  styleUrls: ['./office.page.scss'],
})
export class OfficePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    let isLoggedIn = sessionStorage.getItem('isLoggedIn') != null
    if (!isLoggedIn) this.router.navigate(['/login'])

  }

}
