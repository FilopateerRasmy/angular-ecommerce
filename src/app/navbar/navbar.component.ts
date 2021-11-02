import { Product } from './../products/product';
import { AuthService } from './../auth.service';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
  islogin$ = this.authService.isLogin;
  name = this.authService.currentUser
  cart$ = this.authService.products;
  @Input() isSmall = false;
  constructor(private authService: AuthService) {}
  ngOnInit(): void {}
}
