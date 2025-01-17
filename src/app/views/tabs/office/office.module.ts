import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfficePageRoutingModule } from './office-routing.module';

import { OfficePage } from './office.page';
import { HeaderComponent } from 'src/app/components/header/header.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfficePageRoutingModule
  ],
  declarations: [OfficePage,HeaderComponent]
})
export class OfficePageModule {}
