import { catchError } from 'rxjs/operators';
import { ProductError } from './productError';
import { Product } from './product';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsResolver implements Resolve<Product[] | ProductError> {
  constructor(private productService: ProductsService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product[] | ProductError> {
    return this.productService.products$.pipe(catchError((err) => of( err)));
  }
}
