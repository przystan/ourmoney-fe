import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'user',
    loadChildren: () => import(`./user/user.module`).then(m => m.UserModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
