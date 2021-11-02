import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './../products.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { EMPTY, throwError } from 'rxjs';
import { ProductError } from '../productError';
import { Product } from '../product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListComponent implements OnInit {
errorObject!:ProductError;
  products$!:Product[]
  constructor(private productsService: ProductsService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    let resolvedProducts = this.route.snapshot.data['resolvedProducts'];
    if(resolvedProducts instanceof ProductError){
      this.errorObject = resolvedProducts

    }else{
      this.products$ = resolvedProducts;
    }
  }

}
