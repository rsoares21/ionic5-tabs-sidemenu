import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from "@angular/router";
// The required anchor-link includes
import AnchorLink, { ChainId, LinkSession } from 'anchor-link'
import AnchorLinkBrowserTransport from 'anchor-link-browser-transport'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public menu: MenuController, private router: Router) {
    this.menu.enable(false);
    this.menu.swipeGesture(false);

    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('pdata');
    let isLoggedIn = sessionStorage.getItem('isLoggedIn') != null

  }

  ionViewWillLeave() {
    this.menu.enable(true);
    this.menu.swipeGesture(true);
  }
  ngOnInit() {

    //let isLoggedIn = sessionStorage.getItem('isLoggedIn') != null;

    //if (isLoggedIn) this.router.navigate(['/tabs/garage'])
    //if (isLoggedIn) this.router.navigate(['/logintransition'])
    

  }

  async loginWithAnchor() {

    const transport = new AnchorLinkBrowserTransport();
    const link = new AnchorLink({
      transport,
      chains: [
        {
          chainId: 'f16b1833c747c43682f4386fca9cbb327929334a762755ebec17f6f23c9b8a12',
          nodeUrl: 'https://waxtestnet.greymass.com',
        },
      ],
    });


    // Perform the login, which returns the users identity
    const identity = await link.login('mydapp');

    // Save the session within your application for future use
    const { session } = identity;
    sessionStorage.setItem('isLoggedIn', "true");

    let pdata = { id: 1, account: session.auth, balance_trophy: 100, balance_tyres: 50 }

    sessionStorage.setItem('pdata', JSON.stringify(pdata));

    console.log(`Logged in as ${session.auth}`);
    let isLoggedIn = sessionStorage.getItem('isLoggedIn') != null;
    if (isLoggedIn) this.router.navigate(['/logintransition'])
    
  }


}
