import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './../../shared/material/material.module';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],

})
export class AuthenticationModule { }
