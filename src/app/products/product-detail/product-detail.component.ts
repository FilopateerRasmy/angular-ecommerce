import { AuthService } from './../../auth.service';
import { ProductsService } from './../products.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  product!: Product;
  sub!:Subscription;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private AuthService: AuthService,
    private _snackBar: MatSnackBar
  ) {}
  cart: any[] = [];
  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
  this.sub =  this.productService
      .product(id)
      .subscribe((product) => (this.product = product));
  }
  add() {
    this.AuthService.addData([this.product]);
    console.log(this.AuthService.products);
  }
  ngOnDestroy(){
    this._snackBar.dismiss();
    this.sub.unsubscribe();
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);

  }
}
