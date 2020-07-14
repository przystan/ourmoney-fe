import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './user-page/user-page.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserRoutingModule } from './user-routing.module';
import { UserWelcomeComponent } from './user-welcome/user-welcome.component';

@NgModule({
  declarations: [
    UserPageComponent,
    UserLoginComponent,
    UserRegisterComponent,
    UserWelcomeComponent
  ],
  imports: [CommonModule, UserRoutingModule]
})
export class UserModule {}
