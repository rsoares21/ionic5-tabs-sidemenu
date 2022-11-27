import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExchangePageRoutingModule } from './exchange-routing.module';

import { ExchangePage } from './exchange.page';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExchangePageRoutingModule
  ],
  declarations: [ExchangePage,HeaderComponent]
})
export class ExchangePageModule {}
