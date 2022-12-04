/* eslint-disable prefer-const */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable curly */
/* eslint-disable @typescript-eslint/semi */
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
// The required anchor-link includes
import AnchorLink, { ChainId, LinkSession } from 'anchor-link'
import AnchorLinkBrowserTransport from 'anchor-link-browser-transport'
import { PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isLoggedIn;

  constructor(public menu: MenuController, private router: Router) {
    this.menu.enable(false);
    this.menu.swipeGesture(false);

    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('pdata');
    this.isLoggedIn = sessionStorage.getItem('isLoggedIn') != null

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
    sessionStorage.setItem('isLoggedIn', 'true');

    console.log(`Logged in as ${session.auth}`);
    this.isLoggedIn = sessionStorage.getItem('isLoggedIn') != null;
    if (this.isLoggedIn) {

      const config = { paused: false }
      const pilotContract = { id: 1111111111111, account: 'rizzlesizzle', trophies: 200, tyres: 200, fuel: 200 }

      const assetsContract = [  // scopped to user
        { asset_id: 2222222222222, template_id: 3333333333333, upgrade_target: 0, asset_type: 'car', maxspeed: 1, acceleration: 2, braking: 3, balance: 4, lv_maxspeed: 2, lv_acceleration: 1, lv_braking: 1, lv_balance: 2, condition: 9, staketime: 1663785879 }, //car1
        { asset_id: 2222222222223, template_id: 3333333333334, upgrade_target: 2222222222222, asset_type: 'carupgrade', maxspeed: 4, acceleration: 3, braking: 2, balance: 1, condition: 100, staketime: 1663785879 }  //nft upgrade
      ]

      const carupgradesContract = [ // scopped to user
        
      ]

      const pdata = { pilotContract, assetsContract , carupgradesContract}

      //pdata = { id: 1, account: session.auth, trophies: 100, tyres: 50, fuel: 200 }
      sessionStorage.setItem('pdata', JSON.stringify(pdata));

      this.router.navigate(['/logintransition'])


    }


    //c/onst = playerData = { acoount: session.auth, ''}

  }

}



