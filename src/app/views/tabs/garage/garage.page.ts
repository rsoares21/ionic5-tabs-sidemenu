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

    const someWindowAlreadyOpen = (this.state.isUpgradingWindowOpen || this.state.isTuningWindowOpen)

    // hides other tabs
    if (this.state.isTuningWindowOpen) {
      console.log(1)
      document.getElementById('tuningwindow').style.height = '0px'
      this.state.isTuningWindowOpen = false
    } else {
      console.log(2)
    }

    if (this.state.isUpgradingWindowOpen) {
      console.log(1)
      //console.log(1)
      for (let i = 20; i >= 0; i--) {
        document.getElementById('upgradingwindow').style.height = (i * 6) + 'px'
        await new Promise(r => setTimeout(r, 10));
      }
      document.getElementById('car1SubMenuTitleBar').innerHTML = ''
      //document.getElementById('tuningwindow').style.height = '0px'
      //document.getElementById('tuningsection').innerHTML = ''
      document.getElementById('upgradingwindow').style.animationName = 'none';
      this.state.isUpgradingWindowOpen = false
      this.state.isTuningWindowOpen = false
      //console.log('a')

    } else {
      console.log(2)

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

      //console.log(2)
      document.getElementById('car1SubMenuTitleBar').innerHTML = '<b>UPGRADE</b>'
      document.getElementById('upgradingwindow').style.visibility = 'visible'
      document.getElementById('upgradingwindow').style.height = '120px'

      if (someWindowAlreadyOpen) {
        document.getElementById('upgradingwindow').style.height = '120px'
      } else {
        for (let i = 0; i <= 20; i++) {
          document.getElementById('upgradingwindow').style.height = (i * 6) + 'px'
          await new Promise(r => setTimeout(r, 5));
        }
      }

      //document.getElementById('upgradingsection').insertAdjacentHTML('beforeend', htmlT)
      document.getElementById('upgradingsection').innerHTML = htmlT

      document.getElementById('upgradingwindow').style.animationName = 'upgradingwind';
      document.getElementById('upgradingwindow').style.animationDuration = '1s';

      this.state.isUpgradingWindowOpen = true


    }

  }

  async switchTuningWindow() {

    const someWindowAlreadyOpen = (this.state.isUpgradingWindowOpen || this.state.isTuningWindowOpen)

    // hides other tabs
    if (this.state.isUpgradingWindowOpen) {
      console.log(1)
      document.getElementById('upgradingwindow').style.height = '0px'
      this.state.isUpgradingWindowOpen = false
    } else {
      console.log(2)
    }


    if (this.state.isTuningWindowOpen) {
      //console.log(1)
      for (let i = 20; i >= 0; i--) {
        document.getElementById('tuningwindow').style.height = (i * 6) + 'px'
        await new Promise(r => setTimeout(r, 10));
      }
      document.getElementById('car1SubMenuTitleBar').innerHTML = ''
      //document.getElementById('tuningwindow').style.height = '0px'
      //document.getElementById('tuningsection').innerHTML = ''
      document.getElementById('tuningwindow').style.animationName = 'none';
      this.state.isTuningWindowOpen = false
      //console.log('a')

    } else {

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

      //console.log(2)
      document.getElementById('car1SubMenuTitleBar').innerHTML = '<b>TUNING</b>'
      document.getElementById('tuningwindow').style.visibility = 'visible'
      document.getElementById('tuningwindow').style.height = '120px'

      if (someWindowAlreadyOpen) {
        document.getElementById('tuningwindow').style.height = '120px'
      } else {
        for (let i = 0; i <= 20; i++) {
          document.getElementById('tuningwindow').style.height = (i * 6) + 'px'
          await new Promise(r => setTimeout(r, 5));
        }
      }

      //document.getElementById('tuningsection').insertAdjacentHTML('beforeend', htmlT)
      document.getElementById('tuningsection').innerHTML = htmlT

      document.getElementById('tuningwindow').style.animationName = 'tuningwind';
      document.getElementById('tuningwindow').style.animationDuration = '1s';

      this.state.isTuningWindowOpen = true

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

    //const raceTimeInSeconds = 2700000 // 45 minutes
    const raceTimeInSeconds = 120000 // 15 minutes
    const maxProgressBar = 100

    console.log('init:' + new Date())
    for (let i = 0; i <= maxProgressBar; i++) {
      document.getElementById('raceprogressbar').style.width = i + '%'
      await new Promise(r => setTimeout(r, raceTimeInSeconds / maxProgressBar));
    }
    console.log('ended:' + new Date())

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

  updateCarsBars() {
    this.playerData = JSON.parse(sessionStorage.getItem('pdata'));
    this.playerAccount = JSON.stringify(this.playerData.pilotContract.account)
    console.log('this.playerData:' + JSON.stringify(this.playerData))

    const stakedCars = this.playerData.assetsContract.filter(asset => asset.asset_type === 'car');
    const stakedUpgrades = this.playerData.assetsContract.filter(asset => asset.asset_type === 'carupgrade');

    for (const car of stakedCars) {

      console.log('car:' + JSON.stringify(car))

      // CARS LEVEL BAR POINTS
      let currentbar = ''
      for (let i = 0; i < car.lv_maxspeed; i++) {
        currentbar = currentbar + '▓'
      }
      document.getElementById('maxspeedLvlbarCar' + car.asset_id).innerHTML = currentbar

      currentbar = ''
      for (let i = 0; i < car.lv_acceleration; i++) {
        currentbar = currentbar + '▓'
      }
      document.getElementById('accelerationLvlbarCar' + car.asset_id).innerHTML = currentbar

      currentbar = ''
      for (let i = 0; i < car.lv_braking; i++) {
        currentbar = currentbar + '▓'
      }
      document.getElementById('brakingLvlbarCar' + car.asset_id).innerHTML = currentbar

      currentbar = ''
      for (let i = 0; i < car.lv_balance; i++) {
        currentbar = currentbar + '▓'
      }
      document.getElementById('balanceLvlbarCar' + car.asset_id).innerHTML = currentbar

      // CARS BASE BAR POINTS
      currentbar = ''
      for (let i = 0; i < car.maxspeed; i++) {
        currentbar = currentbar + '▓'
      }
      document.getElementById('maxspeedBasebarCar' + car.asset_id).innerHTML = currentbar

      currentbar = ''
      for (let i = 0; i < car.acceleration; i++) {
        currentbar = currentbar + '▓'
      }
      document.getElementById('accelerationBasebarCar' + car.asset_id).innerHTML = currentbar

      currentbar = ''
      for (let i = 0; i < car.braking; i++) {
        currentbar = currentbar + '▓'
      }
      document.getElementById('brakingBasebarCar' + car.asset_id).innerHTML = currentbar

      currentbar = ''
      for (let i = 0; i < car.balance; i++) {
        currentbar = currentbar + '▓'
      }
      document.getElementById('balanceBasebarCar' + car.asset_id).innerHTML = currentbar


      // CARS UPGRADES BAR POINTS
      for (const upgrade of stakedUpgrades) {

        console.log('upgrade:' + JSON.stringify(upgrade))

        if (upgrade.upgrade_target === car.asset_id) {

          currentbar = ''
          for (let i = 0; i < upgrade.maxspeed; i++) {
            currentbar = currentbar + '▓'
          }
          document.getElementById('maxspeedTunebarCar' + car.asset_id).innerHTML = currentbar

          currentbar = ''
          for (let i = 0; i < upgrade.acceleration; i++) {
            currentbar = currentbar + '▓'
          }
          document.getElementById('accelerationTunebarCar' + car.asset_id).innerHTML = currentbar

          currentbar = ''
          for (let i = 0; i < upgrade.braking; i++) {
            currentbar = currentbar + '▓'
          }
          document.getElementById('brakingTunebarCar' + car.asset_id).innerHTML = currentbar

          currentbar = ''
          for (let i = 0; i < upgrade.balance; i++) {
            currentbar = currentbar + '▓'
          }
          document.getElementById('balanceTunebarCar' + car.asset_id).innerHTML = currentbar



        }

      }

    }


  }

  ngOnInit() {
    console.log('garage ngOnInit()')

    this.updateCarsBars()

    const isLoggedIn = sessionStorage.getItem('isLoggedIn') != null
    if (!isLoggedIn) this.router.navigate(['/login'])

  }

}
