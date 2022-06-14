import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { LoaderComponent } from './utils/loader/loader.component';
import { SnackBarComponent } from './utils/snack-bar/snack-bar.component';



@NgModule({
  declarations: [
    MenuLateralComponent,
    LoaderComponent,
    SnackBarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MenuLateralComponent,
    LoaderComponent,
    SnackBarComponent
  ]
})
export class SharedModule { }
