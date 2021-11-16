import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'
// import { UnAuthorizedComponent } from './error/un-authorized/un-authorized.component';
// import { NotFoundComponent } from './error/not-found/not-found.component';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate, CanLoad {
  constructor(private router: Router, private authService : AuthService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    // next: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url: string = state.url;
    return this.checkUserRole(route, url);
  }
  checkUserRole(route: ActivatedRouteSnapshot, url: any): boolean {
    if (this.authService.isLoggedIn()) {
      let foo = false
      for(let role of route.data.roles){
        if (this.authService.getRole() === role) {
          foo = true;
          break
        }else{
          foo = false;
        }
      }
      if(foo){
        return foo
      }else{
        this.router.navigate(['home/unauthorized'])
        return foo
      }
    }else{
      this.router.navigate(['login']);
      return false;
    }
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
    
  }
}
