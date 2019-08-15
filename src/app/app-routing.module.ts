import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'authentication', pathMatch: 'full' },
  // {
  //   path: 'admin',
  //   loadChildren: './../app/admin/admin.module#AdminModule'
  // },
  // {
  //   path: 'user',
  //   loadChildren: './../app/user/user.module#UserModule'
  // },
  {
    path: 'authentication',
    loadChildren:
      './../app/authentication/authentication.module#AuthenticationModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
