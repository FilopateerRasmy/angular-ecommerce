import { AuthService } from './../auth.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {
  products$ = this.authService.products;
 isLogin = this.authService.isLogin;
  constructor(private authService: AuthService) {
    this.authService.getUser()
  }

  ngOnInit(): void {}
  logout(){
   localStorage.removeItem("userLogin")
   this.authService.getUser()
   this.authService.products.next([])
  }
}
