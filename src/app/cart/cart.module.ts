import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartHomeComponent } from './cart-home/cart-home.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    CartHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'', component:CartHomeComponent}]),
    SharedModule,
    FlexLayoutModule
  ]
})
export class CartModule { }
