import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.checkLogin()) {
      this.router.navigate(["login"]);
      return false;
    }
    return true;
  }

  checkLogin(): boolean {
    // if (localStorage.getItem('login')) {
    //   return true;
    // }
    //
    // // Store the attempted URL for redirecting
    // // this.authService.redirectUrl = url;
    //
    // Navigate to the login page with extras
    // this.router.navigate(['/login']);
    // return false;
    //
    return true;
  }
}
