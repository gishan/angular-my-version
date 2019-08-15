;
import { LoginComponent } from './login/login.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { TestComponent } from './test/test.component'

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ],
  declarations: [AuthenticationComponent, LoginComponent, TestComponent]
})
export class AuthenticationModule { }