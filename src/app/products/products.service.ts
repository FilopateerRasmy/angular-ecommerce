import { ProductError } from './productError';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import {catchError} from 'rxjs/operators'
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  products$: Observable<Product[] | ProductError> = this.http.get<Product[] | ProductError>('https://fakestoreapi.com/products').pipe(
    catchError(err => this.handelError(err))
  );
private handelError(err: HttpErrorResponse){
  let productError = new ProductError();
  productError.errorNumber = 100;
  productError.errorMessage = err.statusText;
  productError.errorFriendlyMessage = 'Error happened during retiving data'
  return throwError(productError);
}
  product(id:number){
    return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`)
  }
}
