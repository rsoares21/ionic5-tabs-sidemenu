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
  constructor() { 

      const players = [
        { id:1, account: 'rizzlesizzle', balance_trophy:100, balance_tyres: 50}
      ]

    
        sessionStorage.setItem('isLoggedIn', JSON.stringify(players)); 

  }
}
