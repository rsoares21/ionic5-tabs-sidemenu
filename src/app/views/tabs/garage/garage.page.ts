/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable curly */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  equipButtonCollor = 'orange-black';
  state;
  constructor(private router: Router) {

    const isLoggedIn = sessionStorage.getItem('isLoggedIn') != null
    if (!isLoggedIn) this.router.navigate(['/login'])

    this.state = {
      carStatus: 'In garage',
      isRaceInProgress: false,
      isRacing: false,
      isUpgradeWindowOpen: false,
      isTuningWindowOpen: false,
      isRepairingCar: false,
    }

  }

  async switchUpgradeWindow() {

    if (this.state.tuningWindowOpen) {
      console.log(1)

      for (let i = 20; i >= 0; i--) {
        document.getElementById('tuningwindow').style.height = (i * 6) + 'px'
        await new Promise(r => setTimeout(r, 10));
      }

      document.getElementById('tuningwindow').style.height = '0px'
      document.getElementById('tuningsection').innerHTML = ''
      document.getElementById('tunningTitleBar').innerHTML = ''
      document.getElementById('tuningwindow').style.animationName = 'none';

      this.state.tuningWindowOpen = false
      console.log('a')
      this.startRaceButtonCollor = 'lime'

    } else {

      console.log(2)

      this.startRaceButtonCollor = 'medium'

      document.getElementById('tunningTitleBar').innerHTML = '<b>TUNING</b>'

      document.getElementById('tuningwindow').style.height = '120px'
      for (let i = 0; i <= 20; i++) {
        document.getElementById('tuningwindow').style.height = (i * 6) + 'px'
        await new Promise(r => setTimeout(r, 5));
      }


      const htmlT = '' +
        '<div style="display: flex; width:800px; margin-top:6px">' +
        '&nbsp;' +
        '<table><tr><td>' +
        '      <table style="background-color:white" border="0"><tr><td colspan="3"><span style="padding-left:4px;font-family:Consolas;font-size:10px;color:black;"><b>MAX SPEED</b></span></td></tr>' +
        '      <tr>' +
        '         <td style="height:60px;width:50px;background-color:deeppink;color:black;"><center>NFT</center></td>' +
        '         <td style="height:60px;width:50px;background-color:dodgerblue;color:black"><center>NFT</center></td>' +
        '         <td style="height:60px;width:50px;background-color:black;color:white"><center>NFT</center></td>' +
        '      </tr>' +
        '      <tr>' +
        '         <td style="width:50px;background-color:goldenrod"><center><ion-button (click)="carlights() " color="danger" style="width: 36px; height: 12px; font-size: 8px;">REMOVE</ion-button></center></td>' +
        '         <td style="width:50px;background-color:goldenrod"><center><ion-button (click)="carlights() " color="danger" style="width: 36px; height: 12px; font-size: 8px;">REMOVE</ion-button></center></td>' +
        '         <td style="width:50px;background-color:goldenrod"><center><ion-button (click)="carlights() " color="danger" style="width: 36px; height: 12px; font-size: 8px;">REMOVE</ion-button></center></td>' +
        '      </tr>' +
        '      </table>' +
        '</td></tr></table>&nbsp;' +
        '<table><tr><td>' +
        '      <table style="background-color:white" border="0"><tr><td colspan="3"><span style="padding-left:5px;font-family:Consolas;font-size:10px;color:black"><b>ACCELERATION</b></span></td></tr>' +
        '      <tr>' +
        '         <td style="height:60px;width:50px;background-color:dodgerblue;color:black"><center>NFT</center></td>' +
        '         <td style="height:60px;width:50px;background-color:limegreen;color:black"><center>NFT</center></td>' +
        '         <td style="height:60px;width:50px;background-color:black;color:white"><center>NFT</center></td>' +
        '      </tr>' +
        '      <tr>' +
        '         <td style="width:50px;background-color:goldenrod"><center><ion-button (click)="carlights() " color="primary" style="width: 36px; height: 12px; font-size: 8px;">EQUIP</ion-button></center></td>' +
        '         <td style="width:50px;background-color:goldenrod"><center><ion-button (click)="carlights() " color="danger" style="width: 36px; height: 12px; font-size: 8px;">REMOVE</ion-button></center></td>' +
        '         <td style="width:50px;background-color:goldenrod"><center><ion-button (click)="carlights() " color="primary" style="width: 36px; height: 12px; font-size: 8px;">EQUIP</ion-button></center></td>' +
        '      </tr>' +
        '      </table>' +
        '</td></tr></table>&nbsp;' +
        '<table><tr><td>' +
        '      <table style="background-color:white" border="0"><tr><td colspan="3"><span style="padding-left:5px;font-family:Consolas;font-size:10px;color:black"><b>BRAKING</b></span></td></tr>' +
        '      <tr >' +
        '         <td style="height:60px;width:50px;background-color:yellow;color:black"><center>NFT</center></td>' +
        '         <td style="height:60px;width:50px;background-color:dodgerblue;color:black"><center>NFT</center></td>' +
        '         <td style="height:60px;width:50px;background-color:dodgerblue;color:black"><center>NFT</center></td>' +
        '         <td style="height:60px;width:50px;background-color:black;color:white"><center>NFT</center></td>' +
        '      </tr>' +
        '      <tr>' +
        '         <td style="width:50px;background-color:goldenrod"><center><ion-button (click)="carlights() " color="danger" style="width: 36px; height: 12px; font-size: 8px;">REMOVE</ion-button></center></td>' +
        '         <td style="width:50px;background-color:goldenrod"><center><ion-button (click)="carlights() " color="primary" style="width: 36px; height: 12px; font-size: 8px;">EQUIP</ion-button></center></td>' +
        '         <td style="width:50px;background-color:goldenrod"><center><ion-button (click)="carlights() " color="danger" style="width: 36px; height: 12px; font-size: 8px;">REMOVE</ion-button></center></td>' +
        '         <td style="width:50px;background-color:goldenrod"><center><ion-button (click)="carlights() " color="primary" style="width: 36px; height: 12px; font-size: 8px;">EQUIP</ion-button></center></td>' +
        '      </tr>' +
        '      </table>' +
        '</td></tr></table>&nbsp;' +
        '<table><tr><td>' +
        '      <table style="background-color:white" border="0"><tr><td colspan="5"><span style="padding-left:5px;font-family:Consolas;font-size:10px;color:black"><b>BALANCE</b></span></td></tr>' +
        '      <tr>' +
        '         <td style="height:60px;width:50px;background-color:yellow;color:black"><center>NFT</center></td>' +
        '         <td style="height:60px;width:50px;background-color:dodgerblue;color:black"><center>NFT</center></td>' +
        '         <td style="height:60px;width:50px;background-color:limegreen;color:black"><center>NFT</center></td>' +
        '         <td style="height:60px;width:50px;background-color:black;color:white"><center>NFT</center></td>' +
        '         <td style="height:60px;width:50px;background-color:black;color:white"><center>NFT</center></td>' +

        '      </tr>' +
        '      <tr>' +
        '         <td style="width:50px;background-color:goldenrod"><center><ion-button (click)="carlights() " color="primary" style="width: 36px; height: 12px; font-size: 8px;">EQUIP</ion-button></center></td>' +
        '         <td style="width:50px;background-color:goldenrod"><center><ion-button (click)="carlights() " color="danger" style="width: 36px; height: 12px; font-size: 8px;">REMOVE</ion-button></center></td>' +
        '         <td style="width:50px;background-color:goldenrod"><center><ion-button (click)="carlights() " color="danger" style="width: 36px; height: 12px; font-size: 8px;">REMOVE</ion-button></center></td>' +
        '         <td style="width:50px;background-color:goldenrod"><center><ion-button (click)="carlights() " color="danger" style="width: 36px; height: 12px; font-size: 8px;">REMOVE</ion-button></center></td>' +
        '         <td style="width:50px;background-color:goldenrod"><center><ion-button (click)="carlights() " color="danger" style="width: 36px; height: 12px; font-size: 8px;">REMOVE</ion-button></center></td>' +
        '      </tr>' +
        '      </table>' +
        '</td></tr></table>&nbsp;' +

        '' +
        '' +
        '</div>'

      document.getElementById('tuningsection').insertAdjacentHTML('beforeend', htmlT)

      document.getElementById('tuningwindow').style.animationName = 'example';
      document.getElementById('tuningwindow').style.animationDuration = '1s';

      this.state.tuningWindowOpen = true

    }

  }

  async switchTuningWindow() {

    let tuningWindowOpen = !(document.getElementById('tuningsection').innerHTML === '')

    if (tuningWindowOpen) {
      console.log(1)

      for (let i = 20; i >= 0; i--) {
        document.getElementById('tuningwindow').style.height = (i * 6) + 'px'
        await new Promise(r => setTimeout(r, 10));
      }

      document.getElementById('tuningwindow').style.height = '0px'
      document.getElementById('tuningsection').innerHTML = ''
      document.getElementById('tunningTitleBar').innerHTML = ''
      document.getElementById('tuningwindow').style.animationName = 'none';

      tuningWindowOpen = false
      console.log('a')

    } else {

      console.log(2)

      document.getElementById('tunningTitleBar').innerHTML = '<b>TUNING</b>'

      document.getElementById('tuningwindow').style.height = '120px'
      for (let i = 0; i <= 20; i++) {
        document.getElementById('tuningwindow').style.height = (i * 6) + 'px'
        await new Promise(r => setTimeout(r, 5));
      }


      const htmlT = '' +
        '<div style="display: flex; width:800px; margin-top:6px">' +
        '&nbsp;' +
        '<table><tr><td>' +
        '      <table style="background-color:white" border="0"><tr><td colspan="3"><span style="padding-left:4px;font-family:Consolas;font-size:10px;color:black;"><b>MAX SPEED</b></span></td></tr>' +
        '      <tr>' +
        '         <td style="height:60px;width:50px;background-color:deeppink;color:black;"><center>NFT</center></td>' +
        '         <td style="height:60px;width:50px;background-color:dodgerblue;color:black"><center>NFT</center></td>' +
        '         <td style="height:60px;width:50px;background-color:black;color:white"><center>NFT</center></td>' +
        '      </tr>' +
        '      <tr>' +
        '         <td style="width:50px;background-color:goldenrod"><center><ion-button (click)="carlights() " color="danger" style="width: 36px; height: 12px; font-size: 8px;">REMOVE</ion-button></center></td>' +
        '         <td style="width:50px;background-color:goldenrod"><center><ion-button (click)="carlights() " color="danger" style="width: 36px; height: 12px; font-size: 8px;">REMOVE</ion-button></center></td>' +
        '         <td style="width:50px;background-color:goldenrod"><center><ion-button (click)="carlights() " color="danger" style="width: 36px; height: 12px; font-size: 8px;">REMOVE</ion-button></center></td>' +
        '      </tr>' +
        '      </table>' +
        '</td></tr></table>&nbsp;' +
        '<table><tr><td>' +
        '      <table style="background-color:white" border="0"><tr><td colspan="3"><span style="padding-left:5px;font-family:Consolas;font-size:10px;color:black"><b>ACCELERATION</b></span></td></tr>' +
        '      <tr>' +
        '         <td style="height:60px;width:50px;background-color:dodgerblue;color:black"><center>NFT</center></td>' +
        '         <td style="height:60px;width:50px;background-color:limegreen;color:black"><center>NFT</center></td>' +
        '         <td style="height:60px;width:50px;background-color:black;color:white"><center>NFT</center></td>' +
        '      </tr>' +
        '      <tr>' +
        '         <td style="width:50px;background-color:goldenrod"><center><ion-button (click)="carlights() " color="primary" style="width: 36px; height: 12px; font-size: 8px;">EQUIP</ion-button></center></td>' +
        '         <td style="width:50px;background-color:goldenrod"><center><ion-button (click)="carlights() " color="danger" style="width: 36px; height: 12px; font-size: 8px;">REMOVE</ion-button></center></td>' +
        '         <td style="width:50px;background-color:goldenrod"><center><ion-button (click)="carlights() " color="primary" style="width: 36px; height: 12px; font-size: 8px;">EQUIP</ion-button></center></td>' +
        '      </tr>' +
        '      </table>' +
        '</td></tr></table>&nbsp;' +
        '<table><tr><td>' +
        '      <table style="background-color:white" border="0"><tr><td colspan="3"><span style="padding-left:5px;font-family:Consolas;font-size:10px;color:black"><b>BRAKING</b></span></td></tr>' +
        '      <tr >' +
        '         <td style="height:60px;width:50px;background-color:yellow;color:black"><center>NFT</center></td>' +
        '         <td style="height:60px;width:50px;background-color:dodgerblue;color:black"><center>NFT</center></td>' +
        '         <td style="height:60px;width:50px;background-color:dodgerblue;color:black"><center>NFT</center></td>' +
        '         <td style="height:60px;width:50px;background-color:black;color:white"><center>NFT</center></td>' +
        '      </tr>' +
        '      <tr>' +
        '         <td style="width:50px;background-color:goldenrod"><center><ion-button (click)="carlights() " color="danger" style="width: 36px; height: 12px; font-size: 8px;">REMOVE</ion-button></center></td>' +
        '         <td style="width:50px;background-color:goldenrod"><center><ion-button (click)="carlights() " color="primary" style="width: 36px; height: 12px; font-size: 8px;">EQUIP</ion-button></center></td>' +
        '         <td style="width:50px;background-color:goldenrod"><center><ion-button (click)="carlights() " color="danger" style="width: 36px; height: 12px; font-size: 8px;">REMOVE</ion-button></center></td>' +
        '         <td style="width:50px;background-color:goldenrod"><center><ion-button (click)="carlights() " color="primary" style="width: 36px; height: 12px; font-size: 8px;">EQUIP</ion-button></center></td>' +
        '      </tr>' +
        '      </table>' +
        '</td></tr></table>&nbsp;' +
        '<table><tr><td>' +
        '      <table style="background-color:white" border="0"><tr><td colspan="5"><span style="padding-left:5px;font-family:Consolas;font-size:10px;color:black"><b>BALANCE</b></span></td></tr>' +
        '      <tr>' +
        '         <td style="height:60px;width:50px;background-color:yellow;color:black"><center>NFT</center></td>' +
        '         <td style="height:60px;width:50px;background-color:dodgerblue;color:black"><center>NFT</center></td>' +
        '         <td style="height:60px;width:50px;background-color:limegreen;color:black"><center>NFT</center></td>' +
        '         <td style="height:60px;width:50px;background-color:black;color:white"><center>NFT</center></td>' +
        '         <td style="height:60px;width:50px;background-color:black;color:white"><center>NFT</center></td>' +

        '      </tr>' +
        '      <tr>' +
        '         <td style="width:50px;background-color:goldenrod"><center><ion-button (click)="carlights() " color="primary" style="width: 36px; height: 12px; font-size: 8px;">EQUIP</ion-button></center></td>' +
        '         <td style="width:50px;background-color:goldenrod"><center><ion-button (click)="carlights() " color="danger" style="width: 36px; height: 12px; font-size: 8px;">REMOVE</ion-button></center></td>' +
        '         <td style="width:50px;background-color:goldenrod"><center><ion-button (click)="carlights() " color="danger" style="width: 36px; height: 12px; font-size: 8px;">REMOVE</ion-button></center></td>' +
        '         <td style="width:50px;background-color:goldenrod"><center><ion-button (click)="carlights() " color="danger" style="width: 36px; height: 12px; font-size: 8px;">REMOVE</ion-button></center></td>' +
        '         <td style="width:50px;background-color:goldenrod"><center><ion-button (click)="carlights() " color="danger" style="width: 36px; height: 12px; font-size: 8px;">REMOVE</ion-button></center></td>' +
        '      </tr>' +
        '      </table>' +
        '</td></tr></table>&nbsp;' +

        '' +
        '' +
        '</div>'

      document.getElementById('tuningsection').insertAdjacentHTML('beforeend', htmlT)

      document.getElementById('tuningwindow').style.animationName = 'example';
      document.getElementById('tuningwindow').style.animationDuration = '1s';

      tuningWindowOpen = true

    }

  }

  async repairCar() {
    const pausedelay = 300
    document.getElementById('carstatus').innerHTML = 'Repairing'
    document.getElementById('carstatus').style.color = 'yellow'

    this.repairButtonCollor = 'medium'
    this.startRaceButtonCollor = 'medium'
    document.getElementById('carconditiontitle').style.color = 'lime'
    await new Promise(r => setTimeout(r, pausedelay));
    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓▓</span><span style="color:dimgray">▓▓▓▓▓▓▓▓▓▓▓▓▓▓</span><span style="color:darkred">▓</span>'
    await new Promise(r => setTimeout(r, pausedelay));
    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓▓▓</span><span style="color:dimgray">▓▓▓▓▓▓▓▓▓▓▓▓▓</span><span style="color:darkred">▓</span>'
    await new Promise(r => setTimeout(r, pausedelay));
    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓▓▓▓</span><span style="color:dimgray">▓▓▓▓▓▓▓▓▓▓▓▓</span><span style="color:darkred">▓</span>'
    await new Promise(r => setTimeout(r, pausedelay));
    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓▓▓▓▓</span><span style="color:dimgray">▓▓▓▓▓▓▓▓▓▓▓</span><span style="color:darkred">▓</span>'
    await new Promise(r => setTimeout(r, pausedelay));
    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓▓▓▓▓▓</span><span style="color:dimgray">▓▓▓▓▓▓▓▓▓▓</span><span style="color:darkred">▓</span>'
    await new Promise(r => setTimeout(r, pausedelay));
    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓▓▓▓▓▓▓</span><span style="color:dimgray">▓▓▓▓▓▓▓▓▓</span><span style="color:darkred">▓</span>'
    await new Promise(r => setTimeout(r, pausedelay));
    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓▓▓▓▓▓▓▓</span><span style="color:dimgray">▓▓▓▓▓▓▓▓</span><span style="color:darkred">▓</span>'
    await new Promise(r => setTimeout(r, pausedelay));
    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓▓▓▓▓▓▓▓▓</span><span style="color:dimgray">▓▓▓▓▓▓▓</span><span style="color:darkred">▓</span>'
    await new Promise(r => setTimeout(r, pausedelay));
    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓▓▓▓▓▓▓▓▓▓</span><span style="color:dimgray">▓▓▓▓▓▓</span><span style="color:darkred">▓</span>'
    await new Promise(r => setTimeout(r, pausedelay));
    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓▓▓▓▓▓▓▓▓▓▓</span><span style="color:dimgray">▓▓▓▓▓</span><span style="color:darkred">▓</span>'
    await new Promise(r => setTimeout(r, pausedelay));
    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓▓▓▓▓▓▓▓▓▓▓▓</span><span style="color:dimgray">▓▓▓▓</span><span style="color:darkred">▓</span>'
    await new Promise(r => setTimeout(r, pausedelay));
    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓▓▓▓▓▓▓▓▓▓▓▓▓</span><span style="color:dimgray">▓▓▓</span><span style="color:darkred">▓</span>'
    await new Promise(r => setTimeout(r, pausedelay));
    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓▓▓▓▓▓▓▓▓▓▓▓▓▓</span><span style="color:dimgray">▓▓</span><span style="color:darkred">▓</span>'
    await new Promise(r => setTimeout(r, pausedelay));
    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓</span><span style="color:dimgray">▓</span><span style="color:darkred">▓</span>'
    await new Promise(r => setTimeout(r, pausedelay));
    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓</span><span style="color:dimgray"></span><span style="color:darkred">▓</span>'




    document.getElementById('carstatus').style.color = 'gold'
    document.getElementById('carstatus').innerHTML = this.state.carStatus


    document.getElementById('carconditiontitle').style.color = 'darkgrey'
    this.repairButtonCollor = 'orange-black'
    console.log('b')
    this.startRaceButtonCollor = 'lime'
  }

  carlights() {

    //alert('lights')
    const garagecar1Image = document.getElementById('garagecar1').innerHTML;
    if ((garagecar1Image).toString().indexOf('_lon') > -1)
      document.getElementById('garagecar1').innerHTML = '<img src="../../../../assets/nytaxicab.jfif" width="120px">'
    else
      document.getElementById('garagecar1').innerHTML = '<img src="../../../../assets/nytaxicab_lon.png" width="120px">'
  }

  async startRace() {

    console.log('c')
    this.startRaceButtonCollor = 'medium'
    this.repairButtonCollor = 'medium'
    this.equipButtonCollor = 'medium'

    document.getElementById('carstatus').style.color = 'lime'

    document.getElementById('carstatus').innerHTML = 'In Race'
    document.getElementById('raceprogressbar').style.backgroundColor = 'lime'

    for (let i = 0; i <= 300; i++) {
      document.getElementById('raceprogressbar').style.width = i / 3 + '%'
      await new Promise(r => setTimeout(r, 20));
    }

    document.getElementById('raceprogressbar').style.backgroundColor = 'goldenrod'
    document.getElementById('instantracelog').style.color = 'color:black'
    document.getElementById('instantracelog').innerHTML = '<b>You placed 3rd!</b><span style="font-size:8px"> click to close<span>'
    document.getElementById('raceprogressbar').style.backgroundColor = 'grey'

    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓</span><span style="color:greenyellow">▓</span><span style="color:darkred">▓</span>'
    await new Promise(r => setTimeout(r, 500));
    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓</span><span style="color:dimgray">▓</span><span style="color:darkred">▓</span>'
    await new Promise(r => setTimeout(r, 500));
    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓</span><span style="color:greenyellow">▓</span><span style="color:darkred">▓</span>'
    await new Promise(r => setTimeout(r, 500));
    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓</span><span style="color:dimgray">▓</span><span style="color:darkred">▓</span>'
    await new Promise(r => setTimeout(r, 500));
    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓</span><span style="color:greenyellow">▓</span><span style="color:darkred">▓</span>'
    await new Promise(r => setTimeout(r, 500));
    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓</span><span style="color:dimgray">▓</span><span style="color:darkred">▓</span>'
    await new Promise(r => setTimeout(r, 500));
    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓</span><span style="color:dimgray">▓</span><span style="color:darkred">▓</span>'
    await new Promise(r => setTimeout(r, 500));
    document.getElementById('carcondition').innerHTML = '<span style="color: greenyellow;">▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓</span><span style="color:dimgray">▓</span><span style="color:darkred">▓</span>'
    await new Promise(r => setTimeout(r, 500));

    await new Promise(r => setTimeout(r, 500));

  }

  showConditionHelp() {
    alert('Car condition mechanic help')
  }


  async afterClickPlacedPosition() {

    document.getElementById('instantracelog').innerHTML = ''

    document.getElementById('carstatus').innerHTML = 'Returning to garage'
    document.getElementById('carstatus').style.color = 'gold'

    for (let i = 0; i <= 200; i++) {
      document.getElementById('raceprogressbar').style.backgroundColor = 'goldenrod'
      document.getElementById('raceprogressbar').style.width = i / 2 + '%'
      await new Promise(r => setTimeout(r, 10));
    }

    document.getElementById('carstatus').innerHTML = this.state.carStatus
    document.getElementById('carstatus').style.color = 'gold'


    document.getElementById('buttonStartRace').style.color = 'lime'
    console.log('d')
    this.startRaceButtonCollor = 'lime'
    this.repairButtonCollor = 'orange-black'
    this.equipButtonCollor = 'orange-black'


  }

  ngOnInit() {

    const isLoggedIn = sessionStorage.getItem('isLoggedIn') != null
    if (!isLoggedIn) this.router.navigate(['/login'])

    console.log(JSON.stringify('isLoggedIn:' + isLoggedIn))

    this.playerData = JSON.parse(sessionStorage.getItem('pdata'));
    this.playerAccount = JSON.stringify(this.playerData.account.actor)
    this.playerAccount = this.playerAccount.replace('\"', '').replace('\"', '')

    console.log('player_data:' + JSON.stringify(this.playerData))

  }

}
