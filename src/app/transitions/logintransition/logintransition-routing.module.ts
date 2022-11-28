import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogintransitionPage } from './logintransition.page';

const routes: Routes = [
  {
    path: '',
    component: LogintransitionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogintransitionPageRoutingModule {}
