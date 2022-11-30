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
  startRaceButtonCollor = 'lime';
  repairButtonCollor = 'orange-black';
  constructor(private router: Router) {

    let isLoggedIn = sessionStorage.getItem('isLoggedIn') != null
    if (!isLoggedIn) this.router.navigate(['/login'])

  }

  async repairCar() {
    document.getElementById('carstatus').innerHTML = 'Repairing'
    document.getElementById('carstatus').style.color = 'yellow'

    this.repairButtonCollor = 'medium'
    this.startRaceButtonCollor = 'medium'
    document.getElementById('carconditiontitle').style.color = 'lime'
    await new Promise(r => setTimeout(r, 500));
    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓</span><span style="color:dimgray">▓▓▓▓▓▓▓▓▓▓▓▓▓▓</span><span style="color:darkred">▓</span>'
    await new Promise(r => setTimeout(r, 500));
    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓▓</span><span style="color:dimgray">▓▓▓▓▓▓▓▓▓▓▓▓▓</span><span style="color:darkred">▓</span>'
    await new Promise(r => setTimeout(r, 500));
    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓▓▓</span><span style="color:dimgray">▓▓▓▓▓▓▓▓▓▓▓▓</span><span style="color:darkred">▓</span>'
    await new Promise(r => setTimeout(r, 500));
    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓▓▓▓</span><span style="color:dimgray">▓▓▓▓▓▓▓▓▓▓▓</span><span style="color:darkred">▓</span>'
    await new Promise(r => setTimeout(r, 500));
    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓▓▓▓▓</span><span style="color:dimgray">▓▓▓▓▓▓▓▓▓▓</span><span style="color:darkred">▓</span>'
    await new Promise(r => setTimeout(r, 500));
    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓▓▓▓▓▓</span><span style="color:dimgray">▓▓▓▓▓▓▓▓▓</span><span style="color:darkred">▓</span>'
    await new Promise(r => setTimeout(r, 500));
    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓▓▓▓▓▓▓</span><span style="color:dimgray">▓▓▓▓▓▓▓▓</span><span style="color:darkred">▓</span>'
    await new Promise(r => setTimeout(r, 500));
    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓▓▓▓▓▓▓▓</span><span style="color:dimgray">▓▓▓▓▓▓▓</span><span style="color:darkred">▓</span>'
    await new Promise(r => setTimeout(r, 500));
    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓▓▓▓▓▓▓▓▓</span><span style="color:dimgray">▓▓▓▓▓▓</span><span style="color:darkred">▓</span>'
    await new Promise(r => setTimeout(r, 500));
    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓▓▓▓▓▓▓▓▓▓</span><span style="color:dimgray">▓▓▓▓▓</span><span style="color:darkred">▓</span>'
    await new Promise(r => setTimeout(r, 500));
    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓▓▓▓▓▓▓▓▓▓▓</span><span style="color:dimgray">▓▓▓▓</span><span style="color:darkred">▓</span>'
    await new Promise(r => setTimeout(r, 500));
    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓▓▓▓▓▓▓▓▓▓▓▓</span><span style="color:dimgray">▓▓▓</span><span style="color:darkred">▓</span>'
    await new Promise(r => setTimeout(r, 500));
    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓▓▓▓▓▓▓▓▓▓▓▓▓</span><span style="color:dimgray">▓▓</span><span style="color:darkred">▓</span>'
    await new Promise(r => setTimeout(r, 500));
    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓▓▓▓▓▓▓▓▓▓▓▓▓▓</span><span style="color:dimgray">▓</span><span style="color:darkred">▓</span>'
    await new Promise(r => setTimeout(r, 500));
    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓</span><span style="color:dimgray"></span><span style="color:darkred">▓</span>'
    




    document.getElementById('carstatus').innerHTML = 'In garage'
    document.getElementById('carstatus').style.color = 'firebrick'


    document.getElementById('carconditiontitle').style.color = 'whitesmoke'
    this.repairButtonCollor = 'orange-black'
    this.startRaceButtonCollor = 'lime'
  }

  carlights() {

    //alert('lights')
    let garagecar1_image = document.getElementById('garagecar1').innerHTML
    if ((garagecar1_image).toString().indexOf('_lon') > -1)
      document.getElementById('garagecar1').innerHTML = '<img src="../../../../assets/nytaxicab.jfif" width="120px">'
    else
      document.getElementById('garagecar1').innerHTML = '<img src="../../../../assets/nytaxicab_lon.png" width="120px">'
  }

  async startRace() {

    this.startRaceButtonCollor = 'medium'
    this.repairButtonCollor = 'medium'

    document.getElementById('carstatus').style.color = 'lime'

    for (let i = 5; i >= 1; i--) {
      document.getElementById('carstatus').innerHTML = 'In Race ('+i+'s)'
      await new Promise(r => setTimeout(r, 1000));
    }
    

    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓▓▓▓▓▓▓▓▓▓▓▓▓▓</span><span style="color:dimgray">▓</span><span style="color:darkred">▓</span>'
    
    document.getElementById('instantracelog').style.color = 'color:black'
    document.getElementById('instantracelog').innerHTML = '<b>You placed 3rd!</b>'
    document.getElementById('carstatus').innerHTML = 'Returning to garage'
    document.getElementById('carstatus').style.color = 'yellow'

    await new Promise(r => setTimeout(r, 6000));
    document.getElementById('carstatus').innerHTML = 'In garage'
    document.getElementById('carstatus').style.color = 'red'

    document.getElementById('instantracelog').innerHTML = ''

    document.getElementById('buttonStartRace').style.color = 'lime'
    this.startRaceButtonCollor = 'lime'
    this.repairButtonCollor = 'orange-black'


  }

  showConditionHelp() {
    alert('Car condition mechanic help')
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
