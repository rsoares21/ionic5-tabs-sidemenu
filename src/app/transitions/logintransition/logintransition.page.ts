import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

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
  
  let isLoggedIn = sessionStorage.getItem('isLoggedIn') != null
  if (isLoggedIn) this.router.navigate(['/tabs/garage'])

}

  ngOnInit() {

    this.playerData = JSON.parse(sessionStorage.getItem('pdata')); 
    this.playerAccount = JSON.stringify(this.playerData.account.actor)
    this.playerAccount = this.playerAccount.replace("\"","").replace("\"","")

    console.log('player_data:'+JSON.stringify(this.playerData))
    this.doTransition()

  }

  
}
