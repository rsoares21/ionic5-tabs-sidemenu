import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      /*{
        path: '',
        loadChildren: () => import('./views/tabs/tabs.module').then(m => m.TabsPageModule)
      },*/
      {
        path: '',
        loadChildren: () => import('./views/login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'signup',
        loadChildren: () => import('./views/signup/signup.module').then(m => m.SignupPageModule)
      }
    ]
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
