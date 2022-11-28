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
      url: '/tabs/tab1',
      icon: 'log-out'
    },
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
  constructor() { }
}
