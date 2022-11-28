import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-garage',
  templateUrl: './garage.page.html',
  styleUrls: ['./garage.page.scss'],
})
export class GaragePage implements OnInit {

  playerData;
  playerAccount;
  constructor(private router: Router) { 

  }

  ngOnInit() {
    
    

    let isLoggedIn = sessionStorage.getItem('isLoggedIn') != null
    if (!isLoggedIn) this.router.navigate(['/login'])

    console.log(JSON.stringify('isLoggedIn:'+isLoggedIn))

    this.playerData = JSON.parse(sessionStorage.getItem('pdata')); 

    this.playerAccount = JSON.stringify(this.playerData.account.actor)
    this.playerAccount = this.playerAccount.replace("\"","").replace("\"","")
    
    console.log('player_data:'+JSON.stringify(this.playerData))

  }

}
