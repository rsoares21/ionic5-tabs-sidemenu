/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable curly */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeHtml } from '@angular/platform-browser';


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
  upgradingsectionHTML = '';
  constructor(private router: Router, private sanitizer: DomSanitizer) {

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
      console.log(11)
      document.getElementById('tuningwindow').style.height = '0px'
      this.state.isTuningWindowOpen = false
    } else {
      console.log(22)
    }

    if (this.state.isUpgradingWindowOpen) {
      console.log(1)
      for (let i = 20; i >= 0; i--) {
        document.getElementById('upgradingwindow').style.height = (i * 6) + 'px'
        await new Promise(r => setTimeout(r, 10));
      }
      document.getElementById('car1SubMenuTitleBar').innerHTML = ''
      document.getElementById('upgradingwindow').style.animationName = 'none';
      this.state.isUpgradingWindowOpen = false
      this.state.isTuningWindowOpen = false

    } else {
      console.log(2)

      //document.getElementById('btupgrademaxspeed').addEventListener('click', this.upgradeMaxSpeed, false);

      document.getElementById('car1SubMenuTitleBar').innerHTML = '<b>UPGRADE</b>'
      document.getElementById('upgradingwindow').style.height = '120px'

      if (someWindowAlreadyOpen) {
        document.getElementById('upgradingwindow').style.height = '120px'
      } else {
        for (let i = 0; i <= 20; i++) {
          document.getElementById('upgradingwindow').style.height = (i * 6) + 'px'
          await new Promise(r => setTimeout(r, 5));
        }
      }

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
      for (let i = 20; i >= 0; i--) {
        document.getElementById('tuningwindow').style.height = (i * 6) + 'px'
        await new Promise(r => setTimeout(r, 10));
      }
      document.getElementById('car1SubMenuTitleBar').innerHTML = ''
      document.getElementById('tuningwindow').style.animationName = 'none';
      this.state.isTuningWindowOpen = false

    } else {

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

      const totalbarpoints = 20
      let fillmaxspeed = totalbarpoints
      let fillacceleration = totalbarpoints
      let fillbraking = totalbarpoints
      let fillbalance = totalbarpoints


      console.log('car:' + JSON.stringify(car))

      // CARS LEVEL BAR POINTS
      let currentbar = ''
      for (let i = 0; i < car.lv_maxspeed; i++) {
        fillmaxspeed--
        currentbar = currentbar + '▓'
      }
      document.getElementById('maxspeedLvlbarCar' + car.asset_id).innerHTML = currentbar

      currentbar = ''
      for (let i = 0; i < car.lv_acceleration; i++) {
        fillacceleration--
        currentbar = currentbar + '▓'
      }
      document.getElementById('accelerationLvlbarCar' + car.asset_id).innerHTML = currentbar

      currentbar = ''
      for (let i = 0; i < car.lv_braking; i++) {
        fillbraking--
        currentbar = currentbar + '▓'
      }
      document.getElementById('brakingLvlbarCar' + car.asset_id).innerHTML = currentbar

      currentbar = ''
      for (let i = 0; i < car.lv_balance; i++) {
        fillbalance--
        currentbar = currentbar + '▓'
      }
      document.getElementById('balanceLvlbarCar' + car.asset_id).innerHTML = currentbar

      // CARS BASE BAR POINTS
      currentbar = ''
      for (let i = 0; i < car.maxspeed; i++) {
        fillmaxspeed--
        currentbar = currentbar + '▓'
      }
      document.getElementById('maxspeedBasebarCar' + car.asset_id).innerHTML = currentbar

      currentbar = ''
      for (let i = 0; i < car.acceleration; i++) {
        fillacceleration--
        currentbar = currentbar + '▓'
      }
      document.getElementById('accelerationBasebarCar' + car.asset_id).innerHTML = currentbar

      currentbar = ''
      for (let i = 0; i < car.braking; i++) {
        fillbraking--
        currentbar = currentbar + '▓'
      }
      document.getElementById('brakingBasebarCar' + car.asset_id).innerHTML = currentbar

      currentbar = ''
      for (let i = 0; i < car.balance; i++) {
        fillbalance--
        currentbar = currentbar + '▓'
      }
      document.getElementById('balanceBasebarCar' + car.asset_id).innerHTML = currentbar


      // CARS UPGRADES BAR POINTS
      for (const upgrade of stakedUpgrades) {

        console.log('upgrade:' + JSON.stringify(upgrade))

        if (upgrade.upgrade_target === car.asset_id) {

          currentbar = ''
          for (let i = 0; i < upgrade.maxspeed; i++) {
            fillmaxspeed--
            currentbar = currentbar + '▓'
          }
          document.getElementById('maxspeedTunebarCar' + car.asset_id).innerHTML = currentbar

          currentbar = ''
          for (let i = 0; i < upgrade.acceleration; i++) {
            fillacceleration--
            currentbar = currentbar + '▓'
          }
          document.getElementById('accelerationTunebarCar' + car.asset_id).innerHTML = currentbar

          currentbar = ''
          for (let i = 0; i < upgrade.braking; i++) {
            fillbraking--
            currentbar = currentbar + '▓'
          }
          document.getElementById('brakingTunebarCar' + car.asset_id).innerHTML = currentbar

          currentbar = ''
          for (let i = 0; i < upgrade.balance; i++) {
            fillbalance--
            currentbar = currentbar + '▓'
          }
          document.getElementById('balanceTunebarCar' + car.asset_id).innerHTML = currentbar

        }

      }

      // FILLS GREY BARS 

      currentbar = ''
      for (let i = 0; i < fillmaxspeed; i++) {
        currentbar = currentbar + '▓'
      }
      document.getElementById('fillmaxspeedCar' + car.asset_id).innerHTML = currentbar

      currentbar = ''
      for (let i = 0; i < fillacceleration; i++) {
        currentbar = currentbar + '▓'
      }
      document.getElementById('fillaccelerationCar' + car.asset_id).innerHTML = currentbar

      currentbar = ''
      for (let i = 0; i < fillbraking; i++) {
        currentbar = currentbar + '▓'
      }
      document.getElementById('fillbrakingCar' + car.asset_id).innerHTML = currentbar

      currentbar = ''
      for (let i = 0; i < fillbalance; i++) {
        currentbar = currentbar + '▓'
      }
      document.getElementById('fillbalanceCar' + car.asset_id).innerHTML = currentbar

    }

  }

  upgradeMaxSpeed(): SafeHtml {
    const carId = '2222222222222'
    console.log('upgradeMaxSpeed')
    this.playerData.assetsContract.filter(asset => asset.asset_id === carId).forEach(upgradedcar => {
      console.log('upgradeMaxSpeed upgradedcar:' + upgradedcar)
      return true;
    });
    this.playerData = JSON.parse(sessionStorage.getItem('pdata'));
    this.playerAccount = JSON.stringify(this.playerData.pilotContract.account)
    return true
  }

  ngOnInit() {
    console.log('garage ngOnInit()')

    document.getElementById('btupgrademaxspeed').addEventListener('click', this.upgradeMaxSpeed, false);

    this.updateCarsBars()

    const isLoggedIn = sessionStorage.getItem('isLoggedIn') != null
    if (!isLoggedIn) this.router.navigate(['/login'])

  }

}
