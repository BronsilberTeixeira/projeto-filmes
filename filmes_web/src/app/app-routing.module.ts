import { LoginComponent } from './main/authentication/login/login.component';
import { HomeComponent } from './main/admin/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },

  {
    path: "home",
    component: HomeComponent
  },

  {
    path: "**",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
