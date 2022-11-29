import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private router: Router) { 
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('pdata');
    let isLoggedIn = sessionStorage.getItem('isLoggedIn') != null
    console.log('logged out.')
  }

  async doTransition() {
    await new Promise(r => setTimeout(r, 3500));
    this.router.navigate(['/login'])
  }

  ngOnInit() {
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('pdata');
    let isLoggedIn = sessionStorage.getItem('isLoggedIn') != null
    console.log('logged out.')
    this.doTransition()

  }

}
