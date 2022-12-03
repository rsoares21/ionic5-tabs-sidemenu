/* eslint-disable @typescript-eslint/semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable curly */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logintransition',
  templateUrl: './logintransition.page.html',
  styleUrls: ['./logintransition.page.scss'],
})
export class LogintransitionPage implements OnInit {

  playerData;
  playerAccount;
  constructor(private router: Router) { }


async doTransition() {

  await new Promise(r => setTimeout(r, 1500));
  
  const isLoggedIn = sessionStorage.getItem('isLoggedIn') != null
  if (isLoggedIn) this.router.navigate(['/tabs/garage'])

}

  ngOnInit() {

    this.playerData = JSON.parse(sessionStorage.getItem('pdata')); 
    this.playerAccount = JSON.stringify(this.playerData.pilotContract.account).replace('\"','').replace('\"','')
    this.doTransition()

  }

  
}
