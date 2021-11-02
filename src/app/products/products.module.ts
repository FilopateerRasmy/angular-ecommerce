import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { Route } from '@angular/compiler/src/core';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductDetailComponent } from './product-detail/product-detail.component';


const route: Routes = [{ path: '', component: ProductsListComponent },
{path:':id', component: ProductDetailComponent}];
@NgModule({
  declarations: [ProductsListComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SharedModule,
    HttpClientModule,
    FlexLayoutModule
  ],
})
export class ProductsModule {}
