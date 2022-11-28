import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogintransitionPageRoutingModule } from './logintransition-routing.module';

import { LogintransitionPage } from './logintransition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogintransitionPageRoutingModule
  ],
  declarations: [LogintransitionPage]
})
export class LogintransitionPageModule {}
