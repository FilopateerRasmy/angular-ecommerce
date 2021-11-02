import { Product } from './../../products/product';
import { AuthService } from './../../auth.service';
import { AfterContentInit, AfterViewInit, Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cart-home',
  templateUrl: './cart-home.component.html',
  styleUrls: ['./cart-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartHomeComponent implements OnInit {
products$ = this.authService.products;
total!:any[];
final:number = 0;
  constructor(private authService: AuthService) {



  }

  ngOnInit(): void {
    this.final = this.products$.getValue().reduce((a,v)=> parseFloat(a) + parseFloat(v.price),0).toFixed(2)
  }



  onDelete(id:number){
    this.authService.delete(id)
    this.final = this.products$.getValue().reduce((a,v)=> parseFloat(a) + parseFloat(v.price),0).toFixed(2)
    }
  }


