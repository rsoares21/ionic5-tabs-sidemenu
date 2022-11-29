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

    let isLoggedIn = sessionStorage.getItem('isLoggedIn') != null
    if (!isLoggedIn) this.router.navigate(['/login'])

  }

  repairCar() {
    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓▓▓▓▓▓▓▓▓▓▓</span><span style="color:dimgray"></span><span style="color:darkred">▓</span>'
    

  }

  carlights() {

    //alert('lights')
    let garagecar1_image = document.getElementById('garagecar1').innerHTML
    if ((garagecar1_image).toString().indexOf('_lon') > -1)
      document.getElementById('garagecar1').innerHTML = '<img src="../../../../assets/nytaxicab.jfif" width="120px">'
    else
      document.getElementById('garagecar1').innerHTML = '<img src="../../../../assets/nytaxicab_lon.png" width="120px">'
  }

  startRace() {

    //alert('lights')
    let garagecar1_image = document.getElementById('garagecar1').innerHTML
    if ((garagecar1_image).toString().indexOf('_lon') > -1)
      document.getElementById('garagecar1').innerHTML = '<img src="../../../../assets/nytaxicab.jfif" width="120px">'
    else
      document.getElementById('garagecar1').innerHTML = '<img src="../../../../assets/nytaxicab_lon.png" width="120px">'
  }


  ngOnInit() {

    let isLoggedIn = sessionStorage.getItem('isLoggedIn') != null
    if (!isLoggedIn) this.router.navigate(['/login'])

    console.log(JSON.stringify('isLoggedIn:' + isLoggedIn))

    this.playerData = JSON.parse(sessionStorage.getItem('pdata'));
    this.playerAccount = JSON.stringify(this.playerData.account.actor)
    this.playerAccount = this.playerAccount.replace("\"", "").replace("\"", "")

    console.log('player_data:' + JSON.stringify(this.playerData))

  }

}
