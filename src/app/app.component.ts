import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  pages = [
    {
      title: 'Logout',
      url: '/logout',
      icon: 'log-out'
    },
    /*{
      title: 'Login',
      url: '/tabs/tab1',
      icon: 'log-in'
    },*/
    {
      title: 'About',
      url: '/tabs/tab2',
      icon: 'person'
    },
    {
      title: 'Game wiki',
      url: '/tabs/tab3',
      icon: 'information-circle'
    }
  ];
  playerData;
  playerAccount;
  constructor() {

    this.playerData = JSON.parse(sessionStorage.getItem('pdata'));

    if (this.playerData != null) {
      this.playerAccount = JSON.stringify(this.playerData.account.actor)
      this.playerAccount = this.playerAccount.replace("\"", "").replace("\"", "")
  
    }

  }
}
