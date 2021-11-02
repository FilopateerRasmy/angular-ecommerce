import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedGuard implements CanActivate {
  constructor(private authService: AuthService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
return this.checkLoggedIn(state.url)

  }



  checkLoggedIn(url:string):boolean{
    if(this.authService.isLogin.getValue() === true){
      return true;
    }else{
      this.authService.redirectUrl = url;
      this.router.navigate(['/login']);
      return false;
    }

  }
}
